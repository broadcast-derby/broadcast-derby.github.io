import {
  ACTION_MONEY_UPDATE_INITIAL_MONEY,
} from 'const'

/**
 * 初期金額更新
 * @param {any} dispatch
 * @param {number|number[]} money 金額 
 */
export const updateMoney = (dispatch: any, money: number | number[]) => {
  window.localStorage.setItem('money', '' + money)
  dispatch({ type: ACTION_MONEY_UPDATE_INITIAL_MONEY, payload: money })
}
