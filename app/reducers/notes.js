const notes = (state = [], action) => {
  let note = action.note;
  switch(action.type){
    case 'REMOVE_NOTE':
      return state.filter(n => n.id !== action.id);
    case 'UPDATE_NOTE':
      let newState = state.filter(n => n.id !== note.id);
      return [ ...newState, note ];
    case 'NEW_NOTE':
      return [ ...state, { note } ];
    default:
      return state;
  }
};

export default notes;
