Vue.component('greeting-box', {
  props: ['person'],
  template: `<div>Hello {{person.firstName}} {{person.lastName}}!</div>`
});

const app = new Vue({
  el: '#app',
  data: {
    people: [
      {firstName: 'John', lastName: 'Smith'},
      {firstName: 'Alice', lastName: 'Couver'},
      {firstName: 'Jane', lastName: 'Ming'}
    ]
  }
});
