const Stack = require('./index');

test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('Add and remove item', () => {
  const stack = new Stack();
  stack.push(1);
  expect(stack.pop()).toEqual(1);
  stack.push(2);
  expect(stack.pop()).toEqual(2);
});

