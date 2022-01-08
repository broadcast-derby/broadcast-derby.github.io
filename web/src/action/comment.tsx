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
    if (comment) {
      const time = comment.getAttributeNode('time')
      const no = comment.getAttributeNode('no')
      const owner = comment.getAttributeNode('owner')
      const userName = comment.getAttributeNode('handle')
      const service = comment.getAttributeNode('service')
      const content = comment.firstChild
      const obj: Comment = {
        time: time ? Number(time.value) : 0,
        no: no ? Number(no.value) : 0,
        owner: owner ? Number(owner.value) : 0,
        userName: userName ? userName.value : '',
        service: service ? service.value : '',
        content: content ? content.nodeValue : '',
      }
      result.push(obj)
    }
  }
  dispatch({ type: ACTION_COMMENT_GET_COMMENTS, payload: result })
}
