import React, {Component} from 'react'
class SelectArray extends Component {
    constructor (props){
        super (props)
        console.log(props)
        this.state = ({
            array:['Mike','Linzy','Tracy','Yezi'],
            value: ''
        })
    }
    handleChange = (event) =>{
        this.setState({value:event.target.value})
    }
    componentWillMount() {
        this.state.value = 'Tracy'
    }
    render() {
        var val = this.state.value
        alert(val)
        return (
            <div>
                <p>{val}</p>
                <select onChange={this.handleChange} value={val}>
                    {
                        this.state.array.map((item,idx) =>{
                             return <option value={item} key={idx}>{item}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}
export default SelectArray