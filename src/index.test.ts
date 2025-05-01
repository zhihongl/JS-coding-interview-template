// @ts-ignore 2835
import { Test } from './index';

describe('Test Class', () => {
  it('should greet the input', () => {
    const test = new Test();
    const result = test.greeting('TDD');
    expect(result).toBe('Hello TDD!');
  });
});
