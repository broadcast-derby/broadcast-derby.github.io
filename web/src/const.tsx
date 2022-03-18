import {
  Color,
  Formula,
  RacehorseBase,
} from 'interface'

/**
 * 色一覧
 */
export const COLORS: Color[] = [
  { key: 'B', name: '青色', code: '#0000ff', isReverse: true, needBorder: false },
  { key: 'C', name: 'シアン', code: '#9999ff', isReverse: false, needBorder: false },
  { key: 'G', name: '緑色', code: '#00ff00', isReverse: false, needBorder: false },
  { key: 'I', name: '藍色', code: '#0000cc', isReverse: true, needBorder: false },
  { key: 'M', name: 'マゼンタ', code: '#ff00ff', isReverse: true, needBorder: false },
  { key: 'O', name: '橙色', code: '#ffcc00', isReverse: false, needBorder: false },
  { key: 'P', name: '紫色', code: '#990099', isReverse: true, needBorder: false },
  { key: 'R', name: '赤色', code: '#ff0000', isReverse: true, needBorder: false },
  { key: 'S', name: '銀色', code: '#cccccc', isReverse: false, needBorder: true },
  { key: 'W', name: '白色', code: '#ffffff', isReverse: false, needBorder: true },
  { key: 'Y', name: '黄色', code: '#ffff00', isReverse: false, needBorder: true },
]

/**
 * 式別
 */
export const FORMULAS: Formula[] = [
  { name: '単勝', description: '一着になるおさかなを当てる', racehorseCount: 1, isCombination: true, keyword: 't' },
  { name: '複勝', description: '三着までに入るおさかなを当てる', racehorseCount: 1, isCombination: true, keyword: 'f' },
  { name: '魚連', description: '一着と二着の組み合わせを当てる', racehorseCount: 2, isCombination: true, keyword: 'ur' },
  { name: '魚単', description: '一着と二着の着順を当てる', racehorseCount: 2, isCombination: false, keyword: 'ut' },
  { name: 'ワイド', description: '三着までに入る二尾の組み合わせを当てる', racehorseCount: 2, isCombination: true, keyword: 'w' },
  { name: '三連複', description: '三着までのおさかなの組み合わせを当てる', racehorseCount: 3, isCombination: true, keyword: '3p' },
  { name: '三連単', description: '三着までのおさかなの着順を当てる', racehorseCount: 3, isCombination: false, keyword: '3t' },
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
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'シャケ', color: 'C', number: 2, imagePath: '/Sake.png',
    keywordRegexList: [
      /.*シャ.*ケ.*/, /.*しゃ.*け.*/, /.*鮭.*/,
      /.*サ.*ー.*モ.*ン.*/, /.*さ.*け.*/, /.*サ.*ケ.*/,
      // /.*青.*/, /.*あ.*お.*/, /.*ア.*オ.*/,
      // /.*(２|2).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'カジキ', color: 'G', number: 3, imagePath: '/Kajiki.png', keywordRegexList: [
      /.*カ.*ジ.*キ.*/, /.*か.*じ.*き.*/,
      // /.*緑.*/, /.*み.*ど.*り.*/, /.*ミ.*ド.*リ.*/,
      // /.*(３|3).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'アジ', color: 'I', number: 4, imagePath: '/Aji.png', keywordRegexList: [
      /.*ア.*ジ.*/, /.*あ.*じ.*/, /.*鯵.*/, /.*鰺.*/,
      // /.*藍.*/, /.*あ.*い.*/, /.*ア.*イ.*/,
      // /.*紺.*/, /.*こ.*ん.*/, /.*コ.*ン.*/,
      // /.*(４|4).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'サバ', color: 'M', number: 5, imagePath: '/Saba.png', keywordRegexList: [
      /.*サ.*バ.*/, /.*さ.*ば.*/, /.*鯖.*/,
      // /.*マ.*ゼ.*ン.*タ.*/, /.*ま.*ぜ.*ん.*た.*/,
      // /.*ピ.*ン.*ク.*/, /.*ぴ.*ん.*く.*/,
      // /.*(５|5).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'カツオ', color: 'O', number: 6, imagePath: '/Katsuo.png', keywordRegexList: [
      /.*カ.*ツ.*オ.*/, /.*か.*つ.*お.*/, /.*鰹.*/,
      // /.*オ.*レ.*ン.*ジ.*/, /.*お.*れ.*ん.*じ.*/, /.*橙.*/,
      // /.*(６|6).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'イカ', color: 'P', number: 7, imagePath: '/Ika.png', keywordRegexList: [
      /.*い.*か.*/, /.*イ.*カ.*/, /.*烏.*賊.*/,
      // /.*紫.*/, /.*ム.*ラ.*サ.*キ.*/, /.*む.*ら.*さ.*き.*/,
      // /.*(７|7).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'タコ', color: 'R', number: 8, imagePath: '/Tako.png', keywordRegexList: [
      /.*タ.*コ.*/, /.*た.*こ.*/, /.*蛸.*/,
      // /.*あ.*か.*/, /.*ア.*カ.*/, /.*赤.*/,
      // /.*(８|8).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'カサゴ', color: 'S', number: 9, imagePath: '/Kasago.png', keywordRegexList: [
      /.*カ.*サ.*ゴ.*/, /.*か.*さ.*ご.*/,
      // /.*銀.*/, /.*ぎ.*ん.*/, /.*ギ.*ン.*/,
      // /.*灰.*/, /.*は.*い.*/, /.*ハ.*イ.*/,
      // /.*(９|9).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'タイ', color: 'W', number: 10, imagePath: '/Tai.png', keywordRegexList: [
      /.*タ.*イ.*/, /.*た.*い.*/, /.*鯛.*/,
      // /.*白.*/, /.*し.*ろ.*/, /.*シ.*ロ.*/,
      // /.*(１０|10).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
  {
    name: 'ブリ', color: 'Y', number: 11, imagePath: '/Buri.png', keywordRegexList: [
      /.*ブ.*リ.*/, /.*ぶ.*り.*/, /.*鰤.*/,
      // /.*黄.*色.*/, /.*き.*い.*ろ.*/, /.*キ.*イ.*ロ.*/,
      // /.*(１１|11).*/,
    ],
    staminaDefault: 10,
    speedDefault: 10,
    supportDefault: 10,
  },
]

/**
 * 金額最大桁数
 */
export const MAX_MONEY_LENGTH: number = 6

/**
 * レース場のデフォルト距離
 */
export const DEFAULT_RACE_TRACK_LENGTH: number = 10000
/**
 * レース場最短距離
 */
export const MIN_RACE_TRACK_LENGTH: number = 5000
/**
 * レース場最長距離
 */
export const MAX_RACE_TRACK_LENGTH: number = 30000

/**
 * 初期金額デフォルト値
 */
export const DEFAULT_TEMP_MONEY = 10000
/**
 * 初期金額最低値
 */
export const MIN_TEMP_MONEY = 0
/**
 * 初期金額最大値
 */
export const MAX_TEMP_MONEY = 100000
/**
 * コメント取得間隔(ms)
 */
export const GET_COMMENT_INTERVAL: number = 100

/**
 * アクションキー名
 * コメント取得
 */
export const ACTION_COMMENT_GET_COMMENTS: string = 'ACTION_COMMENT_GET_COMMENTS'
/**
 * アクションキー名
 * localStorageの情報を正としてstateを更新する
 */
export const ACTION_RACEHORSE_CONSISTENCY: string = 'ACTION_RACEHORSE_CONSISTENCY'
/**
 * アクションキー名
 * 出走馬情報更新
 */
export const ACTION_RACEHORSE_UPDATE_RACEHORSES: string = 'ACTION_RACEHORSE_UPDATE_RACEHORSES'
/**
 * アクションキー名
 * 詳細情報を更新した出走馬情報更新
 */
export const ACTION_RACEHORSE_UPDATE_CUSTOM_RACEHORSES: string = 'ACTION_RACEHORSE_UPDATE_CUSTOM_RACEHORSES'
/**
 * アクション名
 * ユーザが購入した馬券情報削除
 */
export const ACTION_USER_CLEAN_BOUGHT_TICKETS: string = 'ACTION_USER_CLEAN_BOUGHT_TICKETS'
/**
 * アクション名
 * チケット購入アクション
 */
export const ACTION_USER_BUY_TICKET: string = 'ACTION_USER_BUY_TICKET'
/**
 * アクション名
 * ユーザ情報更新
 */
export const ACTION_UPDATE_USERS: string = 'ACTION_UPDATE_USERS'
/**
 * アクション名
 * トラック情報更新
 */
export const ACTION_TRACK_UPDATE_TRACK: string = 'ACTION_TRACK_UPDATE_TRACK'
/**
 * アクション名
 * 初期金額情報更新
 */
export const ACTION_MONEY_UPDATE_INITIAL_MONEY: string = 'ACTION_MONEY_UPDATE_INITIAL_MONEY'