const app = new Vue({
  el: '#app',
  data: {
    myClassA: true,
    myClassB: false
  },
  computed: {
    negatedClasses: function() {
      return {
        'my-a': !this.myClassA,
        'my-b': !this.myClassB
      };
    }
  }
});
