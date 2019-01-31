import React, {Component} from 'react';

import Topic from './component/topic'
import List from './component/list/list'
import Recommond from './component/recommond'
import './index.less'

export default class Home extends Component {

  render() {
    return (
      <div className="homeWrap">
        <div className="left">
          <img src="//upload.jianshu.io/admin_banners/web_images/4601/3f4d6684a208a27d92ea7b5b9759c9dc5049d4c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
               alt="540" style={{width: 625}}/>
          <List />
        </div>

        <div className="right">
          <Recommond/>
        </div>
      </div>
    )
  }
}