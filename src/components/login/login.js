import React, { Component } from 'react'
import DoubleWay from '../doubleWay'
import './login.css'
class login extends Component{
    constructor(props){
        super(props)
        this.state = {
            params:{
                password:'',
                userName:''
            },
            pswError:'',
            nameError:''
        }
    }
    submit = () =>{
        if(this.state.params.password===''||this.state.params.userName===''){
            this.refs.userName.setState({display:true})
            this.refs.psw.setState({display:true})
            this.setState({nameError:'用户名不能为空'})
            this.setState({pswError:'密码不能为空'})
            return false
        }
        if (!/^[A-Z0-9]{6,9}$/.test(this.state.params.password)) {
            return false
        } else {
            this.props.history.push('//index')
        }

    }
    a = (data,name) => {
        console.log(this.state)
        // let d={};
        this.state.params[name]=data
        this.setState({'params':this.state.params})
    }
    checkPsw = (callback) =>{
        if(this.state.params.userName===''){
            callback.setState({display:true})
            this.setState({pswError:'密码不能为空'})
            return false
        }else if(!/^[A-Z0-9]{6,9}$/.test(this.state.params.password)){
            callback.setState({display:true})
            this.setState({pswError:'密码为6-9位数字或字母'})
            return false
        }else{
            callback.setState({display:false})
        }
    }
    checkName = (callback) =>{
        if(this.state.params.userName===''){
            callback.setState({display:true})
            this.setState({nameError:'用户名不能为空'})
            return false
        }else{
            callback.setState({display:false})
        }
    }
    render(){
        var name = this.state.params.userName
        var psw = this.state.params.password
        return(
            <div id='login'>
                <form action="">
                    <div className='login_content'>
                        <p><label>用户名:<DoubleWay ref='userName' value={this.state.params.userName} callback={this.a} name='userName' placeholder='请输入用户名' check={this.checkName} errorMsg={this.state.nameError}></DoubleWay></label></p>
                        <p><label>密码:<DoubleWay ref='psw' type='password' value={this.state.params.password} callback={this.a} name='password' placeholder='请输入密码' check={this.checkPsw} errorMsg={this.state.pswError}></DoubleWay> </label></p>
                        <div>
                            <input type='button' value='提交' onClick={this.submit}></input>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default login