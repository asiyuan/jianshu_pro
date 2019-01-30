import React, {Component} from 'react'
import {Button, Icon} from 'antd'

import './index.less'
import {connect} from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Search,
} from './style'
import {getBlurAction, getFocusAction, getList, mouseEnter, changePageAction} from './store/actions'


class Header extends Component {

  // 获取搜索详情的 组件
  getSearchInfo = () => {
    const {page, list, focused, handleMouseEnter, mouseIn, totalPage, changePage} = this.props
    const newList = list.toJS()
    // console.log(newList)
    const pageList = []
    if (newList.length) {
      for (let i = (page-1) * 10; i < page * 10; i++) {
        pageList.push(<li key={newList[i]}><a href="">{newList[i]}</a></li>)
      }
    }
    if (focused || mouseIn) {
      return (
        <div className="searchInfo" onMouseEnter={handleMouseEnter}>
          <div className="title">热门搜索
            <div className="switch" onClick={() => changePage(page, totalPage)}>
              <Icon type="reload" style={{color: "#787878"}}/> &nbsp;换一批
            </div>
          </div>
          <ul>
            {pageList}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    const {focused, handleFocus, handleBlur,} = this.props
    return (
      <HeaderWrapper>
        <Logo href="/"/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <div className="wrap">
            <input placeholder="搜索"
                   onFocus={handleFocus}
                   onBlur={handleBlur}
                   className={focused ? 'focused' : ''}
            >
            </input>
            {this.getSearchInfo(focused)}
            <Icon type="search" className={focused ? 'focused icon' : 'icon'}/>
          </div>
        </Nav>
        <div className="btn">
          <Button type="primary" style={{marginRight: 20}}>注册</Button>
          <Button type="primary">
            <Icon type="edit"/>
            写文章
          </Button>
        </div>
      </HeaderWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: () => {
      dispatch(getList())
      dispatch(getFocusAction())
    },
    handleBlur: () => {
      dispatch(getBlurAction())
    },
    handleMouseEnter: () => {
      dispatch(mouseEnter())
    },
    changePage: (page, totalPage) => {
      console.log(page, totalPage)
      if (page < totalPage) {
        page += 1
      } else {
        page = 1
      }
      dispatch(changePageAction(page))
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)