class Queue {
  constructor() {
    this.data = [];
  }

  add(value) {
    this.data.push(value);
  }

  remove() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }
}

module.exports = Queue;