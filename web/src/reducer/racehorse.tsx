const initialState = () => {
  const racehorses = window.localStorage.getItem('racehorses')
  return {
    racehorses: JSON.parse(racehorses ?? '[]')
  }
}

export const racehorsesReducer = (state = initialState(), action: any) => {
  switch (action.type) {
    case 'UPDATE_RACEHORSES':
      window.localStorage.setItem('racehorses', JSON.stringify(action.payload))
      return {
        racehorses: action.payload
      }
    default:
      return state
  }
}