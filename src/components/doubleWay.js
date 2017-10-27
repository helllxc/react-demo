import React,{Component} from 'react'
class doubleWay extends Component{
    constructor(props){
        super(props)
        this.state = {value:'',display:false}
    }
    static defaultProps = {
        type:'text',
        check:function (data,err) {

        },
        placeholder:'',
        errorMsg:''
    }
    b = ()=>{
        this.props.check(this)
    }
    handleChange = (event) => {
        this.setState({value:event.target.value})
        this.props.callback(event.target.value,this.props.name)
    }
    render(){
        console.log(this.props.children)
        var check = this.props.check.bind(this);
        var val = this.props.value
        let holder = this.props.placeholder
        let type = this.props.type
        let display;
        this.state.display?display='block':display='none'
        console.log(display)
        return(
            <div>
                <input type={type} value={val} placeholder={holder} onChange={this.handleChange} onBlur={(e)=>{this.b(this)}}/>
                <p style={{display:display,color:'red'}}>{this.props.errorMsg}</p>
                {this.props.children}
            </div>
        )
    }
}

export default doubleWay