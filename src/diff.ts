import AmauiDate, { TTimeUnits, units } from './amaui-date';

export default function diff(value: AmauiDate, value1: AmauiDate, unit: TTimeUnits = 'millisecond'): number {
  if (
    value &&
    value.valid &&
    value instanceof AmauiDate &&

    value1 &&
    value1 instanceof AmauiDate &&
    value1.valid
  ) {
    const diffs = {};

    units.forEach(unit_ => diffs[unit_] = Math.floor(value[unit_] - value1[unit_]));

    return Math.abs(diffs[unit]);
  }
}
