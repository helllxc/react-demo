import React,{Component} from 'react'
import './index.scss'
import axios from 'axios'
class Detail extends Component{
	constructor(props){
		super(props)
		this.state = ({
            info:''
		})
	}
    componentDidMount() {
        axios.get(`/v4/api/film/${this.props.match.params.kerwinId}`).then(res=>{
        	console.log(res)
            this.setState({
                info:res.data.data.film
            })
        })

    }
	render(){
		return(
			<div>
				{
					this.state.info?<div className='detailContent'>
						<img src={this.state.info.cover.origin} alt=""/>
						<h3>{this.state.info.name}</h3>
						<p>{this.state.info.synopsis}</p>
					</div>:null
				}
				{this.props.children}
			</div>
		)
	}
}

export default Detail