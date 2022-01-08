import {
  ACTION_USER_CLEAN_BOUGHT_TICKETS,
  ACTION_USER_BUY_TICKET,
  ACTION_GET_USERS,
  ACTION_UPDATE_USERS,
} from '../const'
import { User, Ticket } from '../interface'

/**
 * 初期値
 */
const initialState = () => {
  let usersStr = window.localStorage.getItem('users')
  if( !usersStr ){
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
  let usersStr = window.localStorage.getItem('users')
  if( !usersStr ){
    usersStr = '[]'
  }
  const users: User[] = JSON.parse(usersStr)
  switch (action.type) {
    // 馬券情報削除
    case ACTION_USER_CLEAN_BOUGHT_TICKETS:
      users.forEach(u => u.boughtTickets = [])
      window.localStorage.setItem('users', JSON.stringify(users))
      return {
        users: users,
      }
    // 馬券購入
    case ACTION_USER_BUY_TICKET:
      let targetUserIndex: number | null = null
      for (let i = 0; i < users.length; i++) {
        const u: User = users[i]
        if (u.name === action.payload.userName && u.service === action.payload.service) {
          targetUserIndex = i
          break
        }
      }
      const boughtTicket: Ticket = {
        formula: action.payload.formula,
        racehorses: action.payload.racehorses,
        money: action.payload.money,
        refund: 0,
      }
      // localStorageからユーザが見つからなければ新規登録
      if (targetUserIndex === null) {
        users.push({
          name: action.payload.userName,
          service: action.payload.service,
          money: 10000,
          boughtTickets: [boughtTicket]
        })
      }
      else {
        users[targetUserIndex].boughtTickets.push(boughtTicket)
      }
      window.localStorage.setItem('users', JSON.stringify(users))
      return {
        users: users,
      }
    case ACTION_GET_USERS:
      let usersStr = window.localStorage.getItem('users')
      if( !usersStr ){
        usersStr = '[]'
      }
      return {
        users: JSON.stringify(usersStr)
      }
    case ACTION_UPDATE_USERS:
      window.localStorage.setItem('users', JSON.stringify(action.payload))
      return {
        users: action.payload
      }
    default:
      return state
  }
}