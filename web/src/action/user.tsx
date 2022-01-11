import {
  ACTION_USER_CLEAN_BOUGHT_TICKETS,
  ACTION_USER_BUY_TICKET,
  ACTION_UPDATE_USERS,
} from '../const'
import { User, Ticket } from '../interface'

/**
 * 手持ちの馬券情報削除
 */
export const cleanBoughtTickets = (dispatch: any) => {
  let usersStr = window.localStorage.getItem('users')
  if (!usersStr) {
    usersStr = '[]'
  }
  const users: User[] = JSON.parse(usersStr)
  users.forEach(u => u.boughtTickets = [])
  window.localStorage.setItem('users', JSON.stringify(users))
  dispatch({ type: ACTION_USER_CLEAN_BOUGHT_TICKETS, payload: users })
}

/**
 * 馬券購入
 * @param {string} userName ユーザ名
 * @param {string} service サービス名
 * @param {number} formula 式別
 * @param {number[]} racehorses 選択された出走馬番号
 * @param {number} money 金額
 */
export const buyTicket = (
  dispatch: any,
  userName: string,
  service: string,
  formula: number,
  racehorses: number[],
  money: number,
) => {
  let usersStr = window.localStorage.getItem('users')
  if (!usersStr) {
    usersStr = '[]'
  }
  const users: User[] = JSON.parse(usersStr)
  let targetUserIndex: number | null = null
  for (let i = 0; i < users.length; i++) {
    const u: User = users[i]
    if (u.name === userName && u.service === service) {
      targetUserIndex = i
      break
    }
  }
  const boughtTicket: Ticket = {
    formula: formula,
    racehorses: racehorses,
    money: money,
    refund: 0,
  }
  // localStorageからユーザが見つからなければ新規登録
  if (targetUserIndex === null) {
    users.push({
      name: userName,
      service: service,
      money: 10000,
      boughtTickets: [boughtTicket]
    })
  }
  else {
    users[targetUserIndex].boughtTickets.push(boughtTicket)
  }
  window.localStorage.setItem('users', JSON.stringify(users))
  dispatch({ type: ACTION_USER_BUY_TICKET, payload: users })
}

/**
 * ユーザ情報更新
 * @param {User[]} users ユーザ情報一覧
 */
export const updateUsers = (dispatch: any, users: User[]) => {
  window.localStorage.setItem('users', JSON.stringify(users))
  dispatch({ type: ACTION_UPDATE_USERS, payload: users })
}