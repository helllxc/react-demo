import React,{Component} from 'react'
class Detail extends Component{
	constructor(props){
		super(props)
		this.state = ({
			
		})
	}
	render(){
		alert(1)
		return(
			<div>
				{
					console.log(this.props)
				}
				111
			</div>
		)
	}
}

export default Detail