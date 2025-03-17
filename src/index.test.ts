import { example } from './index';

describe('Example function', () => {
  it('should greet the input', () => {
    expect(example('TDD')).toBe('Hello, TDD!');
    expect(example('TDD')).toEqual('Hello, TDD!');
    
  });
  
  // Add more test cases as needed
});