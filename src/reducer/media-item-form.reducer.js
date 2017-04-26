const mediaItem = (state, action) => {
  switch (action.type) {
    case 'ADD_MEDIA_ITEM':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'EDIT_MEDIA_ITEM':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    case 'DELETE_MEDIA_ITEM':
    if (state.id !== action.id) {
      return state
    }

    return {
      ...state,
      completed: !state.completed
    }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos  