import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,   // z最开始的页码
  totalPage: 1    //总共有多少页
})

export default (state=defaultState, action) => {
  switch (action.type) {
    case 'focus':
      return state.set('focused', true)
    case 'blur':
      return state.set('focused', false)
    case 'change_list':
      return state.set('list', action.data).set('totalPage', action.totalPage)
    case 'mouse_in':
      return state.set('mouseIn', true)
    case 'mouse_leave':
      return state.set('mouseIn', false)
    case 'change_page':
      return state.set('page', action.page)
    default:
      return state
  }
}