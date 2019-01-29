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

class Header extends Component {

  constructor(props) {
    super(props)
  }





  render() {

    const {focused, handleFocus, handleBlur} = this.props

    return (
      <HeaderWrapper>
        <Logo href="/" />
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
            <Icon type="search" className={focused ? 'focused icon' : 'icon'}/>
          </div>

        </Nav>
        <div className="btn">
          <Button type="primary" style={{marginRight: 20}}>注册</Button>
          <Button type="primary">
            <Icon type="edit" />
            写文章
          </Button>
        </div>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: () => {
      const action = {
        type: 'focus'
      }
      dispatch(action)
    },
    handleBlur: () => {
      const action = {
        type: 'blur'
      }
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)