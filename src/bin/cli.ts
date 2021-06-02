#!/usr/bin/env node

import { run } from '../index';

(async () => {
  try {
    await run(/* process.argv */);
    process.exit(0);
  } catch (e) {
    console.error('Sorry, something unexpected happened', e);
    process.exit(1);
  }
})();
