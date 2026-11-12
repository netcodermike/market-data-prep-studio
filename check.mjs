import {test} from 'node:test';
import {app} from './app.mjs';

test(app.title, () => app.check());
