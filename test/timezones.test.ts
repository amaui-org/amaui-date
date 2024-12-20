/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { timezones } from '../src/timezones';

group('@onesy/timezones', () => {

  to('Europe/Belgrade', async () => {
    const valueBrowsers = await evaluate((window: any) => window.OnesyDate.timezones.find((timezone: { label: string | string[]; }) => timezone.label.indexOf('Europe/Belgrade') > -1));
    const valueNode = timezones.find(timezone => timezone.label.indexOf('Europe/Belgrade') > -1);
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql({
      label: 'Europe/Belgrade (GMT+01:00)',
      code: 'Europe/Belgrade',
      name: '(GMT+01:00) Belgrade, Pristina, Niš, Novi Sad, Prizren',
      utc: '+01:00',
      abbr: 'CET'
    }));
  });

});
