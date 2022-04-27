import {
  assert,
  AssertionError,
} from "https://deno.land/std@0.129.0/testing/asserts.ts";

function assertPowerOf(actual: number, expected: number, msg?: string): void {
  let pointer = actual;
  while (pointer % expected === 0) pointer = pointer / expected;
  if (pointer !== 1) {
    if (!msg) {
      msg = `actual:${actual} expected to be power of ${expected}`;
    }
    throw new AssertionError(msg);
  }
}

Deno.test("Assert Power of", () => {
  assertPowerOf(8, 2);
  assertPowerOf(9, 3);
});
