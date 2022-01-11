import {
  ACTION_USER_CLEAN_BOUGHT_TICKETS,
  ACTION_USER_BUY_TICKET,
  ACTION_UPDATE_USERS,
} from '../const'

/**
 * 初期値
 */
const initialState = () => {
  let usersStr = window.localStorage.getItem('users')
  if (!usersStr) {
    usersStr = '[]'
  }
  return {
    users: JSON.parse(usersStr)
  }
}

/**
 * ユーザ用State更新Recuder
 */
export const userReducer = (state = initialState(), action: any) => {
  switch (action.type) {
    // 馬券情報削除
    case ACTION_USER_CLEAN_BOUGHT_TICKETS:
      return {
        users: action.payload,
      }
    // 馬券購入
    case ACTION_USER_BUY_TICKET:
      return {
        users: action.payload,
      }
    // ユーザ情報更新
    case ACTION_UPDATE_USERS:
      return {
        users: action.payload
      }
    default:
      return state
  }
}