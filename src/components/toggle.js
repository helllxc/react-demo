import React, { Component} from 'react'
import {
    Link,
} from 'react-router-dom'
class Toggle extends Component{
    constructor(props){
        super(props)
        this.state = {clicked:false}
        // this默认指向点击元素，需加bind
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({clicked:!this.state.clicked})
    }
    // 箭头函数不需添加bind
    change = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        // debugger
        console.log(this.props)
        var text = this.state.clicked ? 'true' : 'false'
        var name = this.props.name
        return(
            <div>
                <Link to="/SelectArray" style={{color:'red',textdecoration:'none',fontSize:'20px'}}>SelectArray</Link>
                <p>{text}  {name}</p>
                <button onClick={this.change}>点击切换</button>
            </div>
        )
    }
}

class ToggleBtn extends Component{
    constructor(props){
        super(props)
        console.log(this.props.match)
    }
    render(){
        return(
            <div>
                <p>{this.props.match.params.id}</p>
                <Toggle name='James' url='123'/>
            </div>
        )
    }
}

export default ToggleBtn