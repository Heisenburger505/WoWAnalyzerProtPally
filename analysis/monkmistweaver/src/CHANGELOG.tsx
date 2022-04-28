import { change, date } from 'common/changelog';
import SPELLS from 'common/SPELLS';
import { Abelito75, Anomoly, Moonrabbit, Putro, Tyndi, Vohrr, Trevor } from 'CONTRIBUTORS';
import { SpellLink } from 'interface';


export default [
  change(date(2022, 4, 22), <>Updated example log. </>, Abelito75),
  change(date(2022, 4, 16), <>Added a Mystic Touch stat. </>, Abelito75),
  change(date(2022, 4, 16), <>Enveloping Breath's value from Mist Wrap. </>, Abelito75),
  change(date(2022, 4, 2), <> Removing the fake four set cast event. </>, Abelito75),
  change(date(2022, 4, 2), <> Moved the location of 4set to ITEMS from COVENANTS</>, Abelito75),
  change(date(2022, 3, 29), <> Spirit of the Crane rebuilt for sanity and correctness </>, Abelito75),
  change(date(2022, 3, 16), <> Added T28 Four set Statistic </>, Abelito75),
  change(date(2022, 3, 14), <> Added Average Targets Hit module for Bonedust Brew and fixed Fortifying Ingredients' module. </>, Abelito75),
  change(date(2022, 2, 6), <> Fallen Order now longer works with Mist Wrap. Removing module. </>, Abelito75),
  change(date(2022, 2, 6), <> Added FLS into the Mana Efficiency Tracker.</>, Abelito75),
  change(date(2021, 12, 27), <> Listening for RJW refresh events due to haste change and precast RJWs.</>, Abelito75),
  change(date(2021, 12, 22), <> Re-added EF cancellation.</>, Trevor),
  change(date(2021, 12, 18), <> Updated mana tea thresholds for RJW.</>, Trevor),
  change(date(2021, 12, 5), <> Cleaning up the Vivify Files.</>, Abelito75),
  change(date(2021, 12, 5), <> Cleaning up the Essence Font Files.</>, Abelito75),
  change(date(2021, 12, 5), <> Cleaning up some files.</>, Abelito75),
  change(date(2021, 11, 29), <> Added Essence Font cancellation metadata in timeline</>, Trevor),
  change(date(2021, 11, 23), <> Added Essence Font cancellation detection</>, Trevor),
  change(date(2021, 11, 17), <> Fixed bug in Rising Sun Kick cooldown tracking</>, Trevor),
  change(date(2021, 11, 15), <>Added Cast events directly into the log and normalized other stats that needed it. My sanity is now back intact :)</>, Abelito75),
  change(date(2021, 11, 14), <>Added A Cool And Interesting Infographic For Average Health of a Target When Fallen Order Crane Clones Cast A Healing Spell On Them.</>, Abelito75),
  change(date(2021, 11, 13), <>Added A Cool And Interesting Infographic For RSK Reset.</>, Abelito75),
  change(date(2021, 11, 12), <>Fixed Fallen Order Mist Wrap stat from crashing.</>, Abelito75),
  change(date(2021, 11, 12), <>Updated Checklist so it no longer assumes you will Vivify with Refreshing Jade Wind </>, Abelito75),
  change(date(2021, 11, 12), <>Re-enabled MW and bumped to patch 9.1.5 </>, Abelito75),
  change(date(2021, 11, 12), <>Updated Mana Costs so Tier 30 comparison is accurate again. </>, Abelito75),
  change(date(2021, 11, 12), <>Jade bond works correctly now with all Gust of Mist Healing. </>, Abelito75),
  change(date(2021, 11, 12), <>Added Covenants to Timeline. </>, Abelito75),
  change(date(2021, 11, 12), <>Added Covenants to ABC. </>, Abelito75),
  change(date(2021, 11, 12), <>Fixed Cooldown times of general spells. </>, Abelito75),
  change(date(2021, 11, 12), <>Touch of Death cooldown now works with Fatal Touch and correct scales GCD. </>, Abelito75),
  change(date(2021, 11, 12), <>Updated Gust Of Mist infographic to include Revival. </>, Abelito75),
  change(date(2021, 11, 12), <>Added an infographic breakdown Revivals true healing. </>, Abelito75),
  change(date(2021, 11, 12), <>Added an infographic to show the gain from Mist Wrap for Fallen Order. </>, Abelito75),
  change(date(2021, 11, 3), <>Added an Average Casts for Crane Clones infographic. </>, Abelito75),
  change(date(2021, 11, 3), <>Rearranged some infographics on the Statistics Tab. </>, Abelito75),
  change(date(2021, 10, 31), <>Added a breakdown for Sinister Teachings Legendary Cooldown effect. </>, Abelito75),
  change(date(2021, 10, 31), <>Removing healer stat weights. Adding Abelito75 as a contributor. </>, Abelito75),
  change(date(2021, 5, 17), <>Removing Anomoly as a contributor to this spec.</>, Anomoly),
  change(date(2021, 4, 1), <>Updated Mana Costs for <SpellLink id={SPELLS.RENEWING_MIST.id} /> and <SpellLink id={SPELLS.VIVIFY.id} /> to the correct values for 9.0.5.</>, Anomoly),
  change(date(2021, 1, 16), <>Re-enabling module support, as it is currently still going to be updated and supported moving forward.</>, Anomoly),
  change(date(2021, 1, 16), 'Due to the paywalling of the timeline feature, and fundamental differences of opinion - I will no longer be updating this module beyond todays date. All the modules should be accurate for Castle Nathria, but will not be accurate going forward.', Abelito75),
  change(date(2021, 1, 9), <>Updated what spells are considered healing spells and removed mana tea from gcd. </>, Abelito75),
  change(date(2020, 12, 31), <>Fixed a bug where a Imbued Reflections would show up when it shouldn't. </>, Abelito75),
  change(date(2020, 12, 31), <>Fixed Stat weights if you have zero mastery on gear. </>, Abelito75),
  change(date(2020, 12, 30), <>Fixed some weirdness jss precast and % uptime. </>, Abelito75),
  change(date(2020, 12, 27), <>Fixed some weirdness with reset events happening when cooldown is already reset.</>, Abelito75),
  change(date(2020, 12, 24), <>Added Faeline Stomp tracker.</>, Abelito75),
  change(date(2020, 12, 18), <>Updated Stat weights a wee bit.</>, Abelito75),
  change(date(2020, 12, 18), <>Fixed bug in tier 30 comparison that would make sotc always give 0 mana.</>, Abelito75),
  change(date(2020, 12, 15), 'Bumped level of support to 9.0.2', Putro),
  change(date(2020, 12, 12), <>Enabled endurance conduits.</>, Abelito75),
  change(date(2020, 12, 4), <>Turned on Ancient Teachings of the Monastery and Clouded Focus.</>, Abelito75),
  change(date(2020, 12, 4), <>Enabled conduits.</>, Abelito75),
  change(date(2020, 10, 31), <>Updates to Ancient Teachings of the Monastery.</>, Vohrr),
  change(date(2020, 10, 25), <>Added average Enveloping Breath targets to checklist and suggestions.</>, Vohrr),
  change(date(2020, 10, 21), <>Updates to Lifecyles module to account for innervate and Chi-Ji stacks and updated suggestion threshhold for Shadowlands. </>, Vohrr),
  change(date(2020, 10, 20), <>Fixed Mana Tea duration in T45Comparison and updated Mana Tea suggestion.</>, Vohrr),
  change(date(2020, 10, 19), <>Fixed talent detection for hot tracker. </>, Abelito75),
  change(date(2020, 10, 19), <>Fixed Refreshing Jade Wind. </>, Abelito75),
  change(date(2020, 10, 19), <>Added Enveloping Breath module. </>, Vohrr),
  change(date(2020, 10, 14), <>Converted some more files to typescript as well as fixing internalization. </>, Abelito75),
  change(date(2020, 10, 14), <>Corrected Upwelling's icon. </>, Abelito75),
  change(date(2020, 10, 14), <>Updating Yu'lon's tooltip! </>, Abelito75),
  change(date(2020, 10, 14), <>We're updated for 9.0.1! </>, Abelito75),
  change(date(2020, 10, 12), <>Updated <SpellLink id={SPELLS.ENVELOPING_MIST.id} /> and <SpellLink id={SPELLS.SOOTHING_MIST.id} /> modules to use Event Listeners.</>, Anomoly),
  change(date(2020, 10, 12), <>Converted the majority of files to typescript. </>, Abelito75),
  change(date(2020, 10, 7), <>Updated Stat value scaling. </>, Abelito75),
  change(date(2020, 10, 7), <>Updated Harm Denial to include the expel harm cast on an ally.</>, Moonrabbit),
  change(date(2020, 10, 6), <>Updated <SpellLink id={SPELLS.SPINNING_CRANE_KICK.id} /> and <SpellLink id={SPELLS.ESSENCE_FONT.id} /> modules to use Event Listeners.</>, Anomoly),
  change(date(2020, 10, 4), <>Added stack management breakdown to InvokeChiji talent module. </>, Vohrr),
  change(date(2020, 10, 6), <>Updated most talents to use action listeners.</>, Abelito75),
  change(date(2020, 10, 6), <>Updated <SpellLink id={SPELLS.RENEWING_MIST.id} /> to use Event Listeners.</>, Anomoly),
  change(date(2020, 10, 6), <>Added Fallen Order statistic.</>, Abelito75),
  change(date(2020, 10, 6), <>Updated core spec module files to TypeScript.</>, Anomoly),
  change(date(2020, 10, 6), <>Moved <SpellLink id={SPELLS.INVOKE_CHI_JI_THE_RED_CRANE_TALENT.id} /> statistic box to the correct location.</>, Moonrabbit),
  change(date(2020, 10, 4), <>Added Expel Harm module and updated relevant files.</>, Vohrr),
  change(date(2020, 10, 4), <>Corrected overhealing a few spells in MistweaverHealingEfficiencyTracker.</>, Vohrr),
  change(date(2020, 10, 3), <>Updated <SpellLink id={SPELLS.INVOKE_CHI_JI_THE_RED_CRANE_TALENT.id} /> statbox to include enveloping breath healing.</>, Vohrr),
  change(date(2020, 10, 3), <>Added the Clouded Focus legendary.</>, Abelito75),
  change(date(2020, 10, 2), <>Corrected Life Cocoon to track all hots.</>, Moonrabbit),
  change(date(2020, 10, 2), <>Corrected Nourshing Chi to track all hots.</>, Moonrabbit),
  change(date(2020, 10, 1), <>Updated spell data so stat weights will be accurate.</>, Abelito75),
  change(date(2020, 10, 1), <>Added Statistics for Tear of Morning and Ancient Teachings of the Monastery.</>, Abelito75),
  change(date(2020, 9, 30), <>Integration Tests have been added for Mistweaver.</>, Anomoly),
  change(date(2020, 9, 30), <>Statistic created for the potency conduit Imbued Reflections. </>, Abelito75),
  change(date(2020, 9, 26), <>Added <SpellLink id={SPELLS.INVOKE_YULON_THE_JADE_SERPENT.id} /> and <SpellLink id={SPELLS.INVOKE_CHI_JI_THE_RED_CRANE_TALENT.id} /> to the cooldown tracker.</>, Abelito75),
  change(date(2020, 9, 26), <>Added Rising Sun Revival, Jade Bond, and Nourishing Chi.</>, Abelito75),
  change(date(2020, 9, 26), <>Updated Checklist to include Touch of Death, Yu'lon and Chi-ji.</>, Abelito75),
  change(date(2020, 9, 22), <>Updated pieces to the Mistweaver Core for Shadowlands.</>, Tyndi),
  change(date(2020, 9, 22), <>Mistweaver cleanup for shadowlands.</>, Abelito75),
  change(date(2020, 9, 21), <>Added all endurance conduits.</>, Abelito75),
  change(date(2020, 9, 1), <>Initial Shadowlands cleanup activities.</>, Anomoly),
];
