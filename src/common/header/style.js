import styled from 'styled-components'

import logo from '../../static/nav-logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: 100%
`

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left
  }
  &.right {
    float: right
    color: #969696
  }
  &.active {
    color: #ea6f5a
  }
`

export const Search = styled.input`
  width: 160px;
  height: 38px;
  border: none;
  box-sizing: border-box;
  padding: 0 15px
  margin-top: 9px;
  margin-left: 20px
  outline: none;
  border-radius: 19px;
  background: #eee;
  &::placeholder {
    color: #999
    font-size: 14px
  }
`
