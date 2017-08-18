import React from 'react';

import Icon from 'common/Icon';
import MainCombatLogParser from 'Parser/Core/CombatLogParser';

// Unused
// import SPELLS from 'common/SPELLS';
// import SpellIcon from 'common/SpellIcon';

import SpellLink from 'common/SpellLink';
import StatisticBox from 'Main/StatisticBox';
import SuggestionsTab from 'Main/SuggestionsTab';
import Tab from 'Main/Tab';
import Talents from 'Main/Talents';
import getCastEfficiency from 'Parser/Core/getCastEfficiency';

import ISSUE_IMPORTANCE from 'Parser/Core/ISSUE_IMPORTANCE';

import AbilityTracker from 'Parser/Core/Modules/AbilityTracker';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';

import CPM_ABILITIES from './CPM_ABILITIES';


function formatThousands(number) {
  return (Math.round(number || 0) + '').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function formatNumber(number) {
  if (number > 1000000) {
    return `${(number / 1000000).toFixed(2)}m`;
  }
  if (number > 10000) {
    return `${Math.round(number / 1000)}k`;
  }
  return formatThousands(number);
}

function formatPercentage(percentage) {
  return (Math.round((percentage || 0) * 10000) / 100).toFixed(2);
}

function getIssueImportance(value, regular, major, higherIsWorse = false) {
  if (higherIsWorse ? value > major : value < major) {
    return ISSUE_IMPORTANCE.MAJOR;
  }
  if (higherIsWorse ? value > regular : value < regular) {
    return ISSUE_IMPORTANCE.REGULAR;
  }
  return ISSUE_IMPORTANCE.MINOR;
}

const damageType = {
  1: 'Physical',
  2: 'Holy',
  4: 'Fire',
  8: 'Nature',
  16: 'Frost',
  28: 'Elemental',
  32: 'Shadow',
  33: 'Shadowstrike',
  34: 'Twilight',
  36: 'Shadowflame',
  40: 'Plague',
  48: 'Shadowfrost',
  64: 'Arcane',
  96: 'Spellshadow',
  100: 'Special',
  124: 'Chaos',
};

function getMagicDescription(type) {
  if (damageType[type] === undefined) {
    return 'Chaos';
  }
  return damageType[type];
}

class CombatLogParser extends MainCombatLogParser {
  static specModules = {
    // Features
    alwaysBeCasting: AlwaysBeCasting,
    abilityTracker: AbilityTracker,
  };

  damageBySchool = {};
  on_toPlayer_damage(event) {
    if (this.damageBySchool[event.ability.type] === undefined) {
      this.damageBySchool[event.ability.type] = 0;
    }
    this.damageBySchool[event.ability.type] += event.amount + (event.absorbed || 0);
    super.on_toPlayer_damage(event);
  }

  generateResults() {
    const results = super.generateResults();

    const fightDuration = this.fightDuration;

    const deadTimePercentage = this.modules.alwaysBeCasting.totalTimeWasted / fightDuration;

    if(this.modules.abilityTracker.abilities[1] !== undefined)  {
        this.soulFragmentsCasts = this.modules.abilityTracker.abilities[204255].casts;
        this.immolationAuraDamage = this.modules.abilityTracker.abilities[178741].damangeEffective + this.modules.abilityTracker.abilities[187727].damangeEffective;
        this.empowerWardsCasts = this.modules.abilityTracker.abilities[218256].casts;
        this.demonSpikesCasts = this.modules.abilityTracker.abilities[203720].casts;
    }

    if (deadTimePercentage > 0.2) {
      results.addIssue({
        issue: `Your dead GCD time can be improved. Try to Always Be Casting (ABC).`,
        stat: `${Math.round(deadTimePercentage * 100)}% dead GCD time (<20% is recommended)`,
        icon: 'spell_mage_altertime',
        importance: getIssueImportance(deadTimePercentage, 0.35, 0.4, true),
      });
    }

    const castEfficiency = getCastEfficiency(CPM_ABILITIES, this);
    castEfficiency.forEach((cpm) => {
      if (cpm.canBeImproved && !cpm.ability.noSuggestion) {
        results.addIssue({
          issue: <span>Try to cast <SpellLink id={cpm.ability.spell.id} /> more often ({cpm.casts}/{cpm.maxCasts} casts: {Math.round(cpm.castEfficiency * 100)}% cast efficiency). The recommended cast efficiency is {Math.round(cpm.recommendedCastEfficiency * 100)}%. {cpm.ability.extraSuggestion || ''}</span>,
          icon: cpm.ability.spell.icon,
          importance: cpm.ability.importance || getIssueImportance(cpm.castEfficiency, cpm.recommendedCastEfficiency - 0.05, cpm.recommendedCastEfficiency - 0.15),
        });
      }
    });

    results.statistics = [
      <StatisticBox
        icon={<Icon icon="class_demonhunter" alt="Damage done" />}
        value={`${formatNumber(this.totalDamageDone / this.fightDuration * 1000)} DPS`}
        label='Damage done'
        tooltip={`The total damage done was ${formatThousands(this.totalDamageDone)}.`}
      />,
      <StatisticBox
        icon={<Icon icon="spell_holy_devotionaura" alt="Damage taken" />}
        value={`${formatNumber(this.totalDamageTaken / this.fightDuration * 1000)} DTPS`}
        label='Damage taken'
        tooltip={`Damage taken breakdown:
            <ul>
              ${Object.keys(this.damageBySchool).reduce((v, x) => {return v+=`<li>${getMagicDescription(x)} damage taken ${formatThousands(this.damageBySchool[x])} (${formatPercentage(this.damageBySchool[x]/this.totalDamageTaken)}%)</li>`; }, '')}
            </ul>
            Total damage taken ${formatThousands(this.totalDamageTaken)}`}
      />,
      <StatisticBox
        icon={<Icon icon="spell_mage_altertime" alt="Dead GCD time" />}
        value={`${formatPercentage(deadTimePercentage)} %`}
        label='Dead GCD time'
        tooltip={'Dead GCD time is available casting time not used. This can be caused by latency, cast interrupting, not casting anything (e.g. due to movement/stunned), etc.'}
      />,
      <StatisticBox
      icon={(
          <img
          src="/img/healing.png"
          style={{ border: 0 }}
          alt="Healing"
          />
      )}
      value={`${formatNumber(this.totalHealing / this.fightDuration * 1000)} HPS`}
      label='Healing done'
      tooltip={`The total healing done was ${formatThousands(this.totalHealing)}.`}
      />,
      <StatisticBox
        icon={<Icon icon="ability_druid_naturalperfection" alt="Damage absorbed" />}
        value={`${formatNumber(this.totalDamageTakenAbsorb / this.fightDuration * 1000)} DAPS`}
        label='Damage absorbed'
        tooltip={`The total damage absorbed was ${formatThousands(this.totalDamageTakenAbsorb)}.`}
      />,
      <StatisticBox
        icon={<Icon icon="spell_shadow_soulgem" alt="Soul Fragments Generated" />}
        value={`${formatNumber((this.soulFragmentsCasts / this.fightDuration * 1000) * 60)} SFGPM`}
        label='Soul Fragments Generated'
        tooltip={`The total Soul Fragments generated was ${formatThousands(this.soulFragmentsCasts)}.`}
      />,
      <StatisticBox
        icon={<Icon icon="ability_demonhunter_immolation" alt="Immolation Aura Damage" />}
        value={`${formatNumber(this.immolationAuraDamage / this.fightDuration * 1000)} IADPS`}
        label='Immolation Aura Damage'
        tooltip={`The Immolation Aura total damage was ${formatThousands(this.immolationAuraDamage)}.`}
      />,
      <StatisticBox
        icon={<Icon icon="ability_demonhunter_demonspikes" alt="Demon Spikes Casts" />}
        value={`${formatNumber(this.demonSpikesCasts)} DS`}
        label='Demon Spikes Casts'
        tooltip={`The Demon Spikes total uptime was ${formatThousands(this.demonSpikesCasts * 6)} seconds.`}
      />,
      <StatisticBox
        icon={<Icon icon="ability_demonhunter_empowerwards" alt="Empower Wards Casts" />}
        value={`${formatNumber(this.empowerWardsCasts)} EW`}
        label='Empower Wards Casts'
        tooltip={`The Empower Wards total uptime was ${formatThousands(this.empowerWardsCasts * 6)} seconds.`}
      />,
  ];

    results.tabs = [
      {
        title: 'Suggestions',
        url: 'suggestions',
        render: () => (
          <SuggestionsTab issues={results.issues} />
        ),
      },
      {
        title: 'Talents',
        url: 'talents',
        render: () => (
          <Tab title="Talents">
            <Talents combatant={this.selectedCombatant} />
          </Tab>
        ),
      },
      ...results.tabs,
    ];

    return results;
  }
}

export default CombatLogParser;
