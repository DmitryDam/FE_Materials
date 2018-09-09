import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ value, incrementCounter, decrementCounter }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
  </div>
);
// Связывает значение Store с текущим объектом
const mapStateToProps = state => ({
  value: state.counterValue
});
// Связывание метода с action
function mapDispatchToProps(dispatch) {
  return {
    // метод объекта
    incrementCounter() {
      dispatch({
        type: 'INCREMENT_COUNTER',
        payload: 10
      });
    },
    // метод объекта
    decrementCounter() {
      dispatch({
        type: 'DECREMENT_COUNTER',
        payload: 15
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
