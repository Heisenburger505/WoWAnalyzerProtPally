import SPELLS from 'common/SPELLS';

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.REJUVENATION.id,
  SPELLS.REGROWTH.id,
  SPELLS.WILD_GROWTH.id,
  SPELLS.HEALING_TOUCH.id,
  SPELLS.REJUVENATION_GERMINATION.id,
  SPELLS.CULTIVATION.id,
  SPELLS.TRANQUILITY_HEAL.id,
  SPELLS.EFFLORESCENCE_HEAL.id,
  SPELLS.CENARION_WARD.id,
  SPELLS.LIFEBLOOM_HOT_HEAL.id,
  SPELLS.LIFEBLOOM_BLOOM_HEAL.id,
  SPELLS.DREAMWALKER.id,
  SPELLS.SWIFTMEND.id,
  SPELLS.NATURES_ESSENCE.id,
  SPELLS.RENEWAL.id,
  SPELLS.SPRING_BLOSSOMS.id,
  // The following spells don't double dip in healing increases.
  SPELLS.LEECH.id,
  SPELLS.LIVING_SEED.id,
];
