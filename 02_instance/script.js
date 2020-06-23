const originalObject = {message: 'Hello'};

// Object.freeze(originalObject);

const app = new Vue({
  data: {
    obj: originalObject,
    created: true
  },
  created: function() {
    console.log(`Vue object has been initialised with message: ${this.obj.message}`);
  },
  methods: {
    check: function() {
      console.log(`From vue: ${this.obj.message}`);
      console.log(`From obj: ${originalObject.message}`);
    },
    destroy: function() {
      app.$destroy();
    }
  }
});

const startVue = () => {
  app.$mount(document.getElementById('app'));
};

