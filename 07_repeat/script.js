const app = new Vue({
  el: '#app',
  data: {
    arr: [4, 7, 3, 6, 2, 9, 1],
    obj: {
      id: 23,
      name: 'abc',
      age: 18,
      address: ' Thailand'
    }
  },
  computed: {
    sortedArr: function() {
      return this.arr.map(x => x).sort((a, b) => a - b);
    }
  }
});
