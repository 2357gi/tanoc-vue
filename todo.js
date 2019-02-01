// https://jp.vuejs.org/v2/examples/todomvc.html
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

const app = new Vue({
  el: '#app',
  data: {
    todos: []
  },




  methods: {
    doAdd: function (event, value) {
      // refで名前をつけていた要素を参照(methodから参照するからthisをつける)
      var comment = this.$refs.comment
      //　入力が何もなければ何もせずreturn
      if (!comment.value.length) {
        return
      }

      // { 新しいID, comment, status }
      // をtodosへpush
      // statusはdefaultが作業中 = 0 で作成
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      // フォーム要素をからにする
      comment.value = ''
    }
  },

  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },

  created() {
    this.todos =
  }

})
