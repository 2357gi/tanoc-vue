var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vusddd!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleDateString()
  }
})

var app3 = new Vue({
  ell: '#app-3',
  data:{
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
}
})

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join()
    }
  }
})


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'hello Vue!'
  }
})

Vue.component('blog-component', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

new Vue({
  el:'#blog',
  data: {
    posts: []
  }
})

