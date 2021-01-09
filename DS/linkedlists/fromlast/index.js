// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let firstPointer = list.head;
  let secondPointer = list.head;

  // immediately jump or make a space from 'firstPointer' based on N
  while(n > 0) {
    secondPointer = secondPointer.next;
    n--;
  }

  while(secondPointer.next) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  return firstPointer;
}

module.exports = fromLast;