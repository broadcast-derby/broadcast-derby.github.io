
/**
 * 出走馬基礎情報
 * 設定に限らず固定値
 */
export interface RacehorseBase {
  /**
   * 名前
   */
  name: string,
  /**
   * 色
   */
  color: string,
  /**
   * 番号
   */
  number: number,
  /**
   * 画像のパス
   */
  imagePath: string,
  /**
   * 応援キーワード
   */
  keywordRegexList: RegExp[],
  /**
   * スタミナデフォルト値
   */
  staminaDefault: number | number[],
  /**
   * スピードデフォルト値
   */
  speedDefault: number | number[],
  /**
   * 応援補正値デフォルト
   */
  supportDefault: number | number[],
}
/**
 * 出走馬詳細
 * Configで設定するパラメータ
 */
export interface RacehorseDetail extends RacehorseBase {
  /**
   * 応援補正値
   */
  support: number | number[],
  /**
   * スタミナ
   */
  stamina: number | number[],
  /**
   * スピード
   */
  speed: number | number[],
}
/**
 * 出走する出走馬詳細
 * ゲーム中に変化するパラメータ
 */
export interface RealRacehorse extends RacehorseDetail {
  /**
   * 今の調子
   */
  currentCondition: number,
  /**
   * 走った距離
   */
  runValue: number,
  /**
   * 応援され度
   */
  supportPower: number,
  /**
   * オッズ
   */
  odds: number,
  /**
   * 単勝掛け金
   */
  singleMoney: number,
  /**
   * 得票数
   */
  votes: number,
  /**
   * 実際の人気度
   */
  popularPower: number,
}

/**
 * 色
 */
export interface Color {
  /**
   * キー
   */
  key: string,
  /**
   * 色名
   */
  name: string,
  /**
   * カラーコード
   */
  code: string,
  /**
   * 文字色を反転させるかどうか
   */
  isReverse: boolean,
  /**
   * 枠線が必要かどうか
   */
  needBorder: boolean,
}

/**
 * store
 */
export interface Store {
  count: number,
  racehorses: RacehorseDetail[]
}

/**
 * 式別
 */
export interface Formula {
  /**
   * 名前
   */
  name: string,
  /**
   * 説明
   */
  description: string,
  /**
   * 必要馬数
   */
  racehorseCount: number,
  /**
   * 組み合わせかどうか
   */
  isCombination: boolean,
  /**
   * キーワード
   */
  keyword: string,
}

/**
 * コメント
 */
export interface Comment {
  /**
   * コメント投稿時間
   */
  time: number,
  /**
   * コメントNO
   * 多分時間が被ったときに使われる
   */
  no: number,
  /**
   * オーナー
   * 使わない？
   */
  owner: number,
  /**
   * ユーザ名
   */
  userName: string,
  /**
   * サービス名
   */
  service: string,
  /**
   * コメント内容
   */
  content: string,
}

/**
 * ユーザ情報
 */
export interface User {
  /**
   * 名前
   */
  name: string,
  /**
   * サービス名
   */
  service: string,
  /**
   * 持ち金
   */
  money: number,
  /**
   * 購入馬券
   */
  boughtTickets: Ticket[],
}

/**
 * 馬券
 */
export interface Ticket {
  /**
   * 式別
   */
  formula: number,
  /**
   * 選択した出走馬番号
   */
  racehorses: number[],
  /**
   * 掛け金
   */
  money: number,
  /**
   * 払戻金
   */
  refund: number,
}
/**
 * 出走馬結果
 */
export interface ResultRacehorse {
  /**
   * 払戻金
   */
  money: number,
  /**
   * 人気
   */
  popular: number,
  /**
   * 表示番号
   */
  displayNumber: string,
}
/**
 * 結果
 */
export interface RaceResult {
  /**
   * 上位3位までの出走馬番号
   */
  top3Numbers: number[],
  /**
   * 単勝
   */
  singleWin: ResultRacehorse,
  /**
   * 複勝
   */
  doubleWin: ResultRacehorse[],
  /**
   * 馬連
   */
  compoundWin: ResultRacehorse,
  /**
   * 馬単
   */
  continueWin: ResultRacehorse,
  /**
   * ワイド
   */
  wideWin: ResultRacehorse[],
  /***
   * 三連複
   */
  trifectaWin: ResultRacehorse,
  /**
   * 三連単
   */
  tripleWin: ResultRacehorse,
}
/**
 * トラック情報
 */
export interface Track {
  /**
   * トラックの長さ
   */
  trackLength: number | number[],
}
