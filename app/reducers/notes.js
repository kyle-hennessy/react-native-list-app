const note = (state, action) => {
  switch(action.type){
    case 'NEW_NOTE':
      return {
        id: action.id,
        text: action.text,
        date: action.date
      }
    default:
      return state;
  }
};
const notes = (state = [], action) => {
  switch(action.type){
    case 'REMOVE_NOTE':
      let newState = state.filter(n => n.id !== action.id);
      return newState;
    case 'UPDATE_NOTE':
      let note = action.note;
      let newState = state.filter(n => n.id !== note.id);
      return [ ...newState, note ];
    case 'NEW_NOTE':
      return [ ...state, note(undefined, action) ];
    default:
      return state;
  }
};

export default notes;
