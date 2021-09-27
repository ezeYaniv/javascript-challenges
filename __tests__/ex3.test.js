import { expect, test } from '@jest/globals';
import { exPromise } from '../src/async/concepts/ex3';

test("promise returns 'function ran'", () => {
	return exPromise.then((res) => {
		expect(res).toBe('function ran');
	});
});

test("promise returns 'function ran' string with expect.resolves method", () => {
  return expect(exPromise).resolves.toBe('function ran');
})

test("promise returns 'error message' string with expect.rejects method", () => {
  return expect(exPromise).rejects.toBe('error message');
})