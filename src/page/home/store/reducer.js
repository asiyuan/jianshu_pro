import {fromJS} from 'immutable'

const defaultState = fromJS({
  articleList: [
    
  ]
})

export default (state=defaultState, action) => {
  switch (action.type) {
    case 'get_article_data':
      return state.set('articleList', action.data)
    default: 
      return state
  }
}
