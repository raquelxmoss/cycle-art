import { Observable } from 'rx';
import { div, button } from '@cycle/dom';
import _ from 'lodash';

// Create an array of divs
// Display them as vertical columns with flexbox
// Start with opacity 0 and work up to 100
// Set timeout for colour to move

const columns = _.range(0, 100).map(() => {{}})

const initialState = {columns}

function renderColumn (column, index) {
  return div('hi')
}

function renderColumns (columns) {
  return columns.map((column, index) => renderColumn(column, index))
}

export default function App ({DOM}) {
  const state$ = Observable.of(initialState)

  return {
    DOM: state$.map(state => {
      div('.main', button('.go', "Go"))
    })
  };
}
