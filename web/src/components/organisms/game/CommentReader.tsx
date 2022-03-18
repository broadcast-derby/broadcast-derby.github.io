import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// utils
import { GET_COMMENT_INTERVAL } from 'const'
import { Comment } from 'interface'
import { getComments } from 'action/comment'

/**
 * コメント読み込みProps
 */
interface CommentReaderProps {
  /**
   * コメント追加時イベント
   */
  onAddComment: (comments: Comment[]) => void,
}
/**
 * コメント読み込み
 * 
 * コメントの定期読み込み用コンポーネントなので
 * returnで返す値などは使わない
 */
const CommentReader: React.FC<CommentReaderProps> = ({
  /**
   * コメント追加時イベント
   */
  onAddComment,
}) => {
  /**
   * @description reduxに使用する
   */
  const dispatch = useDispatch()
  /**
   * コメント一覧
   */
  const comments: Comment[] = useSelector((state: any) => state.commentReducer.comments)
  /**
   * コメント取得開始時間
   * 開始時間よりも前のものは取得しないようにする
   */
  const [startTime, setStartTime] = useState<number>(Math.floor(new Date().getTime() / 1000))
  /**
   * コメント取得開始番号
   * 開始時間とコメントの時間が同じ場合にはコメントの番号を見て取得しないようにする
   */
  const [startNo, setStartNo] = useState<number>(-1)
  /**
   * 読み上げる対象化どうか判定する
   * @param {number} startTime      開始時間
   * @param {number} startNo        開始番号
   * @param {number} commentTime    コメント時間
   * @param {number} commentNo      コメント番号
   * @param {string} commentContent コメント内容
   */
  const readable = (startTime: number, startNo: number, commentTime: number, commentNo: number, commentContent: string): boolean => {
    // コメント表示内容が無いものについては読み上げ対象としない
    if (commentContent === '') {
      return false
    }
    // 開始時間よりコメント時間の方が後なら読み上げる対象として判定する
    if (startTime < commentTime) {
      return true
    }
    // 開始時間とコメント時間が同じ場合
    else if (startTime === commentTime) {
      // 開始番号とコメント番号を比較してコメント番号の方が後なら読み上げる対象として判定する
      if (startNo < commentNo) {
        return true
      }
    }
    return false
  }
  /**
   * コメント取得時イベント
   */
  useEffect(() => {
    const actives: Comment[] = []
    comments.map((comment: Comment) => {
      // 読み上げ対象でない場合は省略する
      if (!readable(startTime, startNo, comment.time, comment.no, comment.content)) {
        return
      }
      setStartTime(comment.time)
      setStartNo(comment.no)
      if (comment.owner !== 1) {
        actives.push(comment)
      }
    })
    if (actives.length !== 0) {
      onAddComment(actives.concat())
    }
  }, [comments])
  /**
   * コメント取得再帰処理開始
   */
  useEffect(() => {
    let timer: number | undefined = setInterval(() => {
      dispatch(getComments)
    }, GET_COMMENT_INTERVAL)
    return () => {
      if (timer) {
        clearInterval(timer)
        timer = undefined
      }
    }
  }, [])
  return (
    <React.Fragment></React.Fragment>
  )
}
export default CommentReader

