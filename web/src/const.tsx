import {
  Color,
  Formula,
  RacehorseBase,
} from './interface'

/**
 * 色一覧
 */
export const COLORS: Color[] = [
  { key: 'B', name: '青色', code: '#0000ff' },
  { key: 'C', name: 'シアン', code: '#9999ff' },
  { key: 'G', name: '緑色', code: '#00ff00' },
  { key: 'I', name: '藍色', code: '#0000cc' },
  { key: 'M', name: 'マゼンタ', code: '#ff00ff' },
  { key: 'O', name: '橙色', code: '#ffcc00' },
  { key: 'P', name: '紫色', code: '#990099' },
  { key: 'R', name: '赤色', code: '#ff0000' },
  { key: 'S', name: '銀色', code: '#cccccc' },
  { key: 'W', name: '白色', code: '#ffffff' },
  { key: 'Y', name: '黄色', code: '#ffff00' },
]

/**
 * 式別
 */
export const FORMULAS: Formula[] = [
  { name: '単勝', description: '一着になる魚を当てる', racehorseCount: 1, isCombination: true, keyword: 't' },
  { name: '複勝', description: '三着までに入る魚を当てる', racehorseCount: 1, isCombination: true, keyword: 'f' },
  { name: '魚連', description: '一着と二着の組み合わせを当てる', racehorseCount: 2, isCombination: true, keyword: 'ur' },
  { name: '魚単', description: '一着と二着の着順を当てる', racehorseCount: 2, isCombination: false, keyword: 'ut' },
  { name: 'ワイド', description: '三着までに入る二尾の組み合わせを当てる', racehorseCount: 2, isCombination: true, keyword: 'w' },
  { name: '三連複', description: '三着までの魚の組み合わせを当てる', racehorseCount: 3, isCombination: true, keyword: '3p' },
  { name: '三連単', description: '三着までの魚の着順を当てる', racehorseCount: 3, isCombination: false, keyword: '3t' },
]

/**
 * 全ての出走馬情報
 */
export const RACEHORSES: RacehorseBase[] = [
  { name: 'マグロ', color: 'B', number: 1, imagePath: '/Maguro.png' },
  { name: 'シャケ', color: 'C', number: 2, imagePath: '/Sake.png' },
  { name: 'カジキ', color: 'G', number: 3, imagePath: '/Kajiki.png' },
  { name: 'アジ', color: 'I', number: 4, imagePath: '/Aji.png' },
  { name: 'サバ', color: 'M', number: 5, imagePath: '/Saba.png' },
  { name: 'カツオ', color: 'O', number: 6, imagePath: '/Katsuo.png' },
  { name: 'イカ', color: 'P', number: 7, imagePath: '/Ika.png' },
  { name: 'タコ', color: 'R', number: 8, imagePath: '/Tako.png' },
  { name: 'カサゴ', color: 'S', number: 9, imagePath: '/Kasago.png' },
  { name: 'タイ', color: 'W', number: 10, imagePath: '/Tai.png' },
  { name: 'ブリ', color: 'Y', number: 11, imagePath: '/Buri.png' },
]

/**
 * アクションキー名
 * コメント取得
 */
export const ACTION_COMMENT_GET_COMMENTS = 'ACTION_COMMENT_GET_COMMENTS'
/**
 * アクションキー名
 * localStorageの情報を正としてstateを更新する
 */
export const ACTION_RACEHORSE_CONSISTENCY = 'ACTION_RACEHORSE_CONSISTENCY'
/**
 * アクションキー名
 * 出走馬情報更新
 */
export const ACTION_RACEHORSE_UPDATE_RACEHORSES = 'ACTION_RACEHORSE_UPDATE_RACEHORSES'
/**
 * アクション名
 * ユーザが購入した馬券情報削除
 */
export const ACTION_USER_CLEAN_BOUGHT_TICKETS = 'ACTION_USER_CLEAN_BOUGHT_TICKETS'
/**
 * アクション名
 * チケット購入アクション
 */
export const ACTION_USER_BUY_TICKET = 'ACTION_USER_BUY_TICKET'
