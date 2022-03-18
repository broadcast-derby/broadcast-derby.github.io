import {
  ACTION_MONEY_UPDATE_INITIAL_MONEY,
  DEFAULT_TEMP_MONEY,
} from 'const'

/**
 * 初期値
 * 金額情報はLocalStorageに持たせて永続化させる
 */
const initialState = () => {
  const money = window.localStorage.getItem('money')
  if (!money) {
    return {
      money: DEFAULT_TEMP_MONEY
    }
  }
  else {
    return {
      money: Number(money)
    }
  }
}

/**
 * 金額用State更新Reducer
 * 
 * @param {any} state storeに保持される状態
 * @param {any} action stateを更新するaction
 */
export const moneyReducer = (state = initialState(), action: any) => {
  switch (action.type) {
    // 初期金額情報更新
    case ACTION_MONEY_UPDATE_INITIAL_MONEY:
      return {
        money: action.payload
      }
    default:
      return state
  }
}