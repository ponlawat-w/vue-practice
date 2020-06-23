const app = new Vue({
  el: '#app',
  data: {
    array: ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  },
  methods: {
    change1: function() {
      // this.$set(this.array, 1, 'z');
      Vue.set(this.array, 1, 'z');
      this.log();
    },
    change2: function() {
      this.array[1] = 'x';
      this.log();
    },
    log: function() {
      console.log(this.array);
    }
  }
});
