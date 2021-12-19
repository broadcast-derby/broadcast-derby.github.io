import httpClient from '../httpClient'

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
  const xmlData = parser.parseFromString(response.data, "text/xml")
  let result = []
  let comments = xmlData.getElementsByTagName('comment')
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i]
    let obj = {
      time: comment?.getAttributeNode("time")?.value || "",
      no: comment?.getAttributeNode("no")?.value || "",
      owner: comment?.getAttributeNode("owner")?.value || "",
      handle: comment?.getAttributeNode("handle")?.value || "",
      service: comment?.getAttributeNode("service")?.value || "",
      content: comment?.firstChild ? comment.firstChild.nodeValue : "",
    }
    result.push(obj)
  }
  dispatch({ type: 'GET_COMMENT', payload: result })
}
