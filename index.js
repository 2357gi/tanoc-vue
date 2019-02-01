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

var vm = new Vue({
  el: '#app',
  data: {
    todos: [],
    options: [
      {value: -1, label: '全て' },
      {value:0,   label: '作業中'},
      {value:1,   label: '完了'}
    ],
    current: -1,
    trees: [
      {id:0, class:"id", text:'id'},
      {id:1, class:"state", text:"state"},
      {id:2, class:'button', text:'button'}
    ],
    numTab: 0

  },

  methods: {
    setNumTab: function(num){
      this.data.numTab = num
    },

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
    },


    doChangeState: function (item) {
      item.state = item.state ? 0 : 1
    },
    // 削除の処理
    doRemove: function (item) {
      var index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
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
    this.todos = todoStorage.fetch()
  }

})
