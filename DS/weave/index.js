// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.


const Queue = require('./queue');

function weave(q1, q2) {
  const q3 = new Queue();

  while(q1.peek() || q2.peek()) {
    if(q1.peek()) { q3.add(q1.remove()); }
    if(q2.peek()) { q3.add(q2.remove()); }
  }

  return q3;
}

module.exports = weave;