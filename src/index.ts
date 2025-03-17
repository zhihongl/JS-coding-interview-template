// Your implementation code goes here
export const example = (input: string): string => {
  // console.error('This is an error message');
  const a = [1, 2, 3];
  console.log(a);
  a.sort((a, b) => a - b);
  'a'.localeCompare('b');
  console.log('stopped here');
  const b = [...a];
  const test = '3';
  a.reverse();
  return `Hello, ${input}!`;
};

// For demonstration purposes, we'll log something to the console
console.log(example('TDDDCD'));
console.log(example('testing'));
