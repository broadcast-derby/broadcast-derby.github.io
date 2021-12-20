import { ACTION_COMMENT_GET_COMMENTS } from '../const'

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
    case ACTION_COMMENT_GET_COMMENTS:
      return {
        comments: action.payload
      }
    default:
      return state
  }
}