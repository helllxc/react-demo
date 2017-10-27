import React, { Component } from 'react'
import './nav.css'
import {
    NavLink
} from 'react-router-dom'
class nav extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let display;
        this.props.isShow ? display = 'block' : display = 'none'
        return(
            <nav className={this.props.isShow?'show':'hide'}>
`                <ul>
                    <li>
                        <NavLink to='/home'>主页</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home'>影片</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home'>影院</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home'>我的</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home'>卖座卡</NavLink>
                    </li>
                </ul>
                {this.props.children}
            </nav>
        )
    }
}

export default nav