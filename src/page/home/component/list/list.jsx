import React, {Component} from 'react';
import {connect} from 'react-redux'

import './index.less'
class List extends Component {

  render() {
    const articleList = this.props.articleList.toJS()
    return (
        <ul className="listWrap">
          {
            articleList.map((article, index) => (
              <li className="list" key={index}>
                <img src={article.imgUrl} alt=""/>
                <a href="">
                  <h1>{article.title}</h1>
                </a>
                <p>{article.desc}</p>
              </li>
            ))
          }
        </ul>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}

export default connect(mapState)(List)