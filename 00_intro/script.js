const app = new Vue({
  el: '#app',
  data: {
    items: [
      {name: 'Pen', price: 10},
      {name: 'Pencil', price: 5}
    ],
    newItem: {
      name: '',
      price: 0
    }
  },
  methods: {
    resetNewItem: function() {
      this.newItem = {name: '', price: 0};
    },
    submit: function() {
      this.newItem.name = this.newItem.name.trim();
      if (this.newItem.name && this.newItem.price >= 0) {
        this.items.push(this.newItem);
        this.resetNewItem();
      }
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
    }
  }
});
