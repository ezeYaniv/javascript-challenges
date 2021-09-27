import { expect } from '@jest/globals';
import {getData} from '../src/async/concepts/ex2';

test('it should return the response in handlers', async() => {
    const response = await getData();

    expect(response.name).toBe('Ditto')
})