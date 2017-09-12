export class NytService {
  constructor($http, $q) {
    this.http = $http;
    this.q = $q;
  }
  getBooks(list) {
    const req = {
      method: 'GET',
      url: 
    }
    this.http()
    return [
      {
        id: (todos.length === 0) ? 0 : todos[0].id + 1,
        completed: false,
        text
      }
    ].concat(todos);
  }

  completeTodo(id, todos) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  }

  deleteTodo(id, todos) {
    return todos.filter(todo => todo.id !== id);
  }

  editTodo(id, text, todos) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {text}) :
        todo;
    });
  }

  completeAll(todos) {
    const areAllMarked = todos.every(todo => todo.completed);
    return todos.map(todo => Object.assign({}, todo, {completed: !areAllMarked}));
  }

  clearCompleted(todos) {
    return todos.filter(todo => {
      return todo.completed === false;
    });
  }
}

