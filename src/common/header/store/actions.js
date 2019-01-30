import axios from 'axios'
import {fromJS} from 'immutable'

// 获取焦点的 action
export const getFocusAction = () => ({type: 'focus'})

// 失去焦点的 action
export const getBlurAction = () => ({type: 'blur'})

const changeList = (data) => (
  {
    type: 'change_list',
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
)

// 异步获取 收缩数据， return function
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const result = res.data
      dispatch(changeList(result.data))
      
    }).catch(err => {
      console.log('请求出错了')
    })
  }
}

export const mouseEnter =() => (
  {
    type: 'mouse_in'
  }
)
export const changePageAction = (page) => (
  {
    type: 'change_page',
    page: page
  }
)