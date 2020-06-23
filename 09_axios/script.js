const app = new Vue({
  el: '#app',
  data: {
    loading: false,
    data: null
  },
  computed: {
    time: function() {
      if (!this.data) {
        return 'N/A';
      }
      const date = new Date(parseInt(this.data.time));
      return `${date.getHours()} นาฬิกา ${date.getMinutes()} นาที ${date.getSeconds()} วินาที`;
    }
  },
  methods: {
    loadData: function() {
      this.loading = true;
      axios.get('https://prc.labive.com/test/').then(result => {
        this.data = result.data;
      }).finally(() => {
        this.loading = false;
      }).catch(error => {
        alert(error);
      });
    }
  }
});
