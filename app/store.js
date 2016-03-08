'use strict';

import { createStore } from 'redux';
import notes from './reducers/notes';

const MOCK_STATE = {
  notes: [
    {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 100
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 100
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 124
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 165
    }, {
      title: 'Title Text goes here',
      summary: 'Here is a brief clip of the text truncated...Here is a brief clip of the text truncated...Here is a brief clip of the text truncated...Here is a brief clip of the text truncated...',
      date: '2016-2-3',
      id: 65
    }
  ]
};

let store = createStore(notes, MOCK_STATE);

export default store;
