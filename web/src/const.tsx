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
  {
    name: 'マグロ', color: 'B', number: 1, imagePath: '/Maguro.png',
    keywordRegexList: [
      /.*マ.*グ.*ロ.*/, /.*ま.*ぐ.*ろ.*/, /.*鮪.*/,
      // /.*青.*/, /.*あ.*お.*/, /.*ア.*オ.*/,
      // /.*(１|1).*/,
    ]
  },
  {
    name: 'シャケ', color: 'C', number: 2, imagePath: '/Sake.png',
    keywordRegexList: [
      /.*シャ.*ケ.*/, /.*しゃ.*け.*/, /.*鮭.*/,
      /.*サ.*ー.*モ.*ン.*/, /.*さ.*け.*/, /.*サ.*ケ.*/,
      // /.*青.*/, /.*あ.*お.*/, /.*ア.*オ.*/,
      // /.*(２|2).*/,
    ]
  },
  {
    name: 'カジキ', color: 'G', number: 3, imagePath: '/Kajiki.png', keywordRegexList: [
      /.*カ.*ジ.*キ.*/, /.*か.*じ.*き.*/,
      // /.*緑.*/, /.*み.*ど.*り.*/, /.*ミ.*ド.*リ.*/,
      // /.*(３|3).*/,
    ]
  },
  {
    name: 'アジ', color: 'I', number: 4, imagePath: '/Aji.png', keywordRegexList: [
      /.*ア.*ジ.*/, /.*あ.*じ.*/, /.*鯵.*/, /.*鰺.*/,
      // /.*藍.*/, /.*あ.*い.*/, /.*ア.*イ.*/,
      // /.*紺.*/, /.*こ.*ん.*/, /.*コ.*ン.*/,
      // /.*(４|4).*/,
    ]
  },
  {
    name: 'サバ', color: 'M', number: 5, imagePath: '/Saba.png', keywordRegexList: [
      /.*サ.*バ.*/, /.*さ.*ば.*/, /.*鯖.*/,
      // /.*マ.*ゼ.*ン.*タ.*/, /.*ま.*ぜ.*ん.*た.*/,
      // /.*ピ.*ン.*ク.*/, /.*ぴ.*ん.*く.*/,
      // /.*(５|5).*/,
    ]
  },
  {
    name: 'カツオ', color: 'O', number: 6, imagePath: '/Katsuo.png', keywordRegexList: [
      /.*カ.*ツ.*オ.*/, /.*か.*つ.*お.*/, /.*鰹.*/,
      // /.*オ.*レ.*ン.*ジ.*/, /.*お.*れ.*ん.*じ.*/, /.*橙.*/,
      // /.*(６|6).*/,
    ]
  },
  {
    name: 'イカ', color: 'P', number: 7, imagePath: '/Ika.png', keywordRegexList: [
      /.*い.*か.*/, /.*イ.*カ.*/, /.*烏.*賊.*/,
      // /.*紫.*/, /.*ム.*ラ.*サ.*キ.*/, /.*む.*ら.*さ.*き.*/,
      // /.*(７|7).*/,
    ]
  },
  {
    name: 'タコ', color: 'R', number: 8, imagePath: '/Tako.png', keywordRegexList: [
      /.*タ.*コ.*/, /.*た.*こ.*/, /.*蛸.*/,
      // /.*あ.*か.*/, /.*ア.*カ.*/, /.*赤.*/,
      // /.*(８|8).*/,
    ]
  },
  {
    name: 'カサゴ', color: 'S', number: 9, imagePath: '/Kasago.png', keywordRegexList: [
      /.*カ.*サ.*ゴ.*/, /.*か.*さ.*ご.*/,
      // /.*銀.*/, /.*ぎ.*ん.*/, /.*ギ.*ン.*/,
      // /.*灰.*/, /.*は.*い.*/, /.*ハ.*イ.*/,
      // /.*(９|9).*/,
    ]
  },
  {
    name: 'タイ', color: 'W', number: 10, imagePath: '/Tai.png', keywordRegexList: [
      /.*タ.*イ.*/, /.*た.*い.*/, /.*鯛.*/,
      // /.*白.*/, /.*し.*ろ.*/, /.*シ.*ロ.*/,
      // /.*(１０|10).*/,
    ]
  },
  {
    name: 'ブリ', color: 'Y', number: 11, imagePath: '/Buri.png', keywordRegexList: [
      /.*ブ.*リ.*/, /.*ぶ.*り.*/, /.*鰤.*/,
      // /.*黄.*色.*/, /.*き.*い.*ろ.*/, /.*キ.*イ.*ロ.*/,
      // /.*(１１|11).*/,
    ]
  },
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
/**
 * アクション名
 * ユーザ情報取得
 */
export const ACTION_GET_USERS = 'ACTION_GET_USERS'
/**
 * アクション名
 * ユーザ情報更新
 */
export const ACTION_UPDATE_USERS = 'ACTION_UPDATE_USERS'