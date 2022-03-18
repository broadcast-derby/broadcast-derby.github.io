import { COLORS } from 'const'
import { Color } from 'interface'

/**
 * キーからカラーコードを取得
 * @param {string} key キー名 
 * @returns カラーコード
 */
export const getColorCode = (key: string): string => {
  const color = COLORS.find((c: Color) => c.key === key)
  if (color) {
    return color.code
  }
  else {
    return '#ffffff'
  }
}
/**
 * キーから文字色を反転させるかどうかを取得
 * @param {string} key キー名 
 * @returns 反転させるかどうか
 */
export const isReverse = (key: string): boolean => {
  const color = COLORS.find((c: Color) => c.key === key)
  if (color) {
    return color.isReverse
  }
  else {
    return false
  }
}
/**
 * キーから枠線が必要かどうかを取得
 * @param {string} key キー名 
 * @returns 枠線が必要かどうか
 */
export const needBorder = (key: string): boolean => {
  const color = COLORS.find((c: Color) => c.key === key)
  if (color) {
    return color.needBorder
  }
  else {
    return false
  }
}