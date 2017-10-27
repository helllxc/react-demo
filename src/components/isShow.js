import React, {Component} from 'react'
import Focus from './ref'
import Select from '../select'

class isShow extends Component {
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.isLogin){
            return <Focus></Focus>
        }else{
            return <Select></Select>
        }
    }
}

export default isShow