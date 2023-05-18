class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    this.length = 0;
  }

  read(index) {

    // Your code here
    return this.data[index];
  }

  push(val) {

    // Your code here
    if (this.capacity === this.length) {
      this.resize()
    }

    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    // Your code here
    const popped = this.data[this.length - 1]

    delete this.data[this.length - 1];
    this.length--;

    return popped;
  }

  shift() {

    const shifted = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return shifted;
  }

  unshift(val) {

    // Your code here

    if (this.length === this.capacity) {
      this.resize();
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }
    return -1;

  }

  resize() {

    // Your code here
    this.capacity *= 2;

    let tem = new Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      tem[i] = this.data[i];
    }

    this.data = tem;
  }

}


module.exports = DynamicArray;
