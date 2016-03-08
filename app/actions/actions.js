export const newNote = (note) {
  return {
    type: 'NEW_NOTE',
    note
  };
}

export const removeNote = (id) {
  return {
    type: 'REMOVE_NOTE',
    id
  }
}
export const updateNote = (note) {
  return {
    type: 'UPDATE_NOTE',
    note
  }
}
