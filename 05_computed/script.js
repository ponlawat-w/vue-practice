const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    reversedMessage: '',
    firstName: '',
    lastName: ''
  },
  computed: {
    upperCasedMessage: function() {
      console.log('Calling computed');
      return this.message.toUpperCase();
    },
    fullName: {
      get: function() {
        return `${this.firstName} ${this.lastName}`.trim();
      },
      set: function(val) {
        if (!val) {
          this.firstName = ''; this.lastName = '';
          return;
        }
        const names = val.split(' ');
        this.firstName = names[0];
        this.lastName = names.length > 1 ? names[1] : '';
      }
    }
  },
  methods: {
    makeMessageLowerCased: function() {
      console.log('Calling method');
      return this.message.toLowerCase();
    }
  },
  watch: {
    message: function (value) {
      console.log('Calling watch');
      this.reversedMessage = value.split('').reverse().join('');
    }
  }
});
