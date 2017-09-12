import {NytService} from './nyt';

describe('TodoService', () => {
  let nytService;

  beforeEach(() => {
    nytService = new NytService();
  });

  it('should retrieve cat list', () => {
    const res = nytService.getLists();
    expect(res.data.results.length).toEqual(2);
    expect(res[0].id).toEqual(1);
  });

  it('should complete a todo', () => {
    const res = todoService.completeTodo(0, todos);
    expect(res.length).toEqual(1);
    expect(res[0].completed).toEqual(true);
  });

  it('should delete a todo', () => {
    const res = todoService.deleteTodo(0, todos);
    expect(res.length).toEqual(0);
  });

  it('should edit a todo', () => {
    const res = todoService.editTodo(0, 'Changed it', todos);
    expect(res.length).toEqual(1);
    expect(res[0].text).toEqual('Changed it');
  });

  it('should complete all todos', () => {
    let res = todoService.addTodo('Hello', todos);
    res = todoService.completeAll(res);
    for (const todo of res) {
      expect(todo.completed).toEqual(true);
    }
  });

  it('should clear all completed todos', () => {
    let res = todoService.addTodo('Hello', todos);
    res = todoService.completeTodo(0, res);
    res = todoService.clearCompleted(res);
    expect(res.length).toEqual(1);
    expect(res[0].completed).toEqual(false);
  });
});
