import React from 'react';
import { connect } from 'react-redux';

const WatchList = ({ items }) => {
  return <div>{items.map((i, idx) => <h1 key={i.id}>{i.text}</h1>)}</div>;
};

function getWatchlistTodos(todos, idList) {
	// Если есть такая тудушка с таким ИД, то вернет ТРУ и она вернется,
	// Если нет, то не вернется
  return todos.filter(t => idList.includes(t.id));
}
// Сверху вспомогательная функция
const mstp = state => ({
  items: getWatchlistTodos(state.todos, state.watchlist)
});

export default connect(mstp, null)(WatchList);
