import httpClient from '../httpClient'

import { ACTION_COMMENT_GET_COMMENTS } from '../const'
import { Comment } from '../interface'

/**
 * DOMParser
 * XML形式の文字列をXMLに変換するために使用する
 */
const parser = new window.DOMParser()

/**
 * コメント取得Action
 */
export const getComments = async (dispatch: any) => {
  const response = await httpClient.get('/setting/comment.xml')
  const xmlData: Document = parser.parseFromString(response.data, 'text/xml')
  const result: Comment[] = []
  const comments: HTMLCollectionOf<Element> = xmlData.getElementsByTagName('comment')
  for (let i = 0; i < comments.length; i++) {
    const comment: any = comments[i]
    const obj: Comment = {
      time: Number(comment?.getAttributeNode('time')?.value) || 0,
      no: Number(comment?.getAttributeNode('no')?.value) || 0,
      owner: Number(comment?.getAttributeNode('owner')?.value) || 0,
      userName: comment?.getAttributeNode('handle')?.value || '',
      service: comment?.getAttributeNode('service')?.value || '',
      content: comment?.firstChild ? comment.firstChild.nodeValue : '',
    }
    result.push(obj)
  }
  dispatch({ type: ACTION_COMMENT_GET_COMMENTS, payload: result })
}
