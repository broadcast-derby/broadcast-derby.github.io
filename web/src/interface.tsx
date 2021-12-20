
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
   * 調子補正値
   */
  condition: number | number[],
  /**
   * 順位補正値
   */
  ranking: number | number[],
  /**
   * 距離補正値
   */
  distance: number | number[],
  /**
   * 人気補正値
   */
  popular: number | number[],
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