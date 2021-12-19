
/**
 * 初期値
 */
const initialState = () => {
  return {
    comments: []
  }
}

/**
 * コメント用State更新Recuder
 */
export const commentReducer = (state = initialState(), action: any) => {
  switch (action.type) {
    // コメント取得
    case 'GET_COMMENT':
      return {
        comments: action.payload
      }
    default:
      return state
  }
}