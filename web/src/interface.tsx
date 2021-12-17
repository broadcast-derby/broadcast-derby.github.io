
/**
 * 出走馬
 */
export interface Racehorse {
  /**
   * 名前
   */
  name: String,
  /**
   * 色
   */
  color: String,
  /**
   * 番号
   */
  number: number,
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