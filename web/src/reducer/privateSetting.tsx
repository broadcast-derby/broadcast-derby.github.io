const initialState = () => {
  const privateContent = JSON.parse(window.localStorage.getItem('private') ?? '{}')
  return {
    niconicoUrl: privateContent.niconicoUrl ?? '',
    youtubeUrl: privateContent.youtubeUrl ?? '',
    twitchUrl: privateContent.twitchUrl ?? '',
  }
}

export const privateSettingReducer = (state = initialState(), action: any) => {
  const privateContent = JSON.parse(window.localStorage.getItem('private') ?? '{}')
  switch (action.type) {
    case 'GET_NICONICO_URL':
      return privateContent.niconicoUrl
    case 'UPDATE_NICONICO_URL':
      privateContent.niconicoUrl = action.payload
      window.localStorage.setItem('private', JSON.stringify(privateContent))
      return {
        niconicoUrl: action.payload
      }
    case 'GET_YOUTUBE_URL':
      return privateContent.youtubeUrl
    case 'UPDATE_YOUTUBE_URL':
      privateContent.youtubeUrl = action.payload
      window.localStorage.setItem('private', JSON.stringify(privateContent))
      return {
        youtubeUrl: action.payload
      }
    case 'GET_TWITCH_URL':
      return privateContent.twitchUrl
    case 'UPDATE_TWITCH_URL':
      privateContent.twitchUrl = action.payload
      window.localStorage.setItem('private', JSON.stringify(privateContent))
      return {
        twitchUrl: action.payload
      }
    default:
      return state
  }
}