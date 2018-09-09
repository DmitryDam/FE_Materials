import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from 'components/Todo';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
  };

  render() {
    const { todos, onTodoClick } = this.props;
    // onTodoClick это prop из APP
    // на который он в АРР повесил onDeleteTodo
    // todos - он аналогично из АРР передает
    // onClick это prop в который он передает ф-ию onTodoClick
    // заврочивает ее в еще 1 ф-ию...Получается вызывает onTodoClick
    // внутри пустой ф-ии. ппц... А потом он дальше передает это 
    // в Todo
    return (
      <div>
        {todos.map(t => (
          <Todo
            key={t.id}
            text={t.text}
            onClick={() => {
              onTodoClick(t.id);
            }}
          />
        ))}
      </div>
    );
  }
}
