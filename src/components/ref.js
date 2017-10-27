import React, { Component } from 'react'
class Focus extends Component{
    constructor(props) {
        super(props)
        this.state = ({
            value: '',
            val: '',
            style:{display:'block'}

        })
    }
    handleClick = () => {
        // this.refs.myText.focus()
        this.setState({style:{display:this.props.display}})
    }
    handleChange = (event) => {
        this.setState({value:event.target.value})
    }
    btnClick = (id) =>{
        console.log(id)
        this.setState((preState,props) =>({
            value: (preState.value - 0) + (props.num - 0)
        }))
    }
    componentWillReceiveProps(nextProps) {
       console.log(nextProps)
    }
    render() {
        var value = this.state.value
        var val = this.state.val
        var style = this.state.style
        return (
            <div>
                <p>{value}</p>
                <input type="number" ref='myText' onChange={this.handleChange} value={value}/>
                <input type='button' value='点击聚焦输入框' onClick={this.handleClick}/>
                <input style={{'display':style.display}} type='button' value='点击数字加1' onClick={(e) => this.btnClick('123', e)} />
                {this.props.children}
            </div>
        )
    }
}
export default Focus