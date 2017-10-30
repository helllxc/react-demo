import React, {Component} from 'react'
import axios from 'axios'
import './index.scss'
import Toggle from '../toggle'
import SelectArray from '../select'
import {
    Route,
    Switch
} from 'react-router-dom'
import '../../assets/iconfont/iconfont.css'
class home extends Component{
    constructor(props){
        super(props)
        this.state = ({
        	playinglist:[]
        })
    }
    componentWillMount() {
        axios.get("/v4/api/billboard/home").then(res=>{
            //接口错误排除
            if(res.data.data.billboards){
                this.setState({
                    datalist:res.data.data.billboards
                })
            }

        })
         axios.get("/v4/api/film/now-playing").then(res=>{
            this.setState({
                playinglist:res.data.data.films
            })

        })    
    }
    
    toDetail = (id) =>{
    	console.log(this)
    	this.props.history.push('/detail/'+id);
    }
    render(){
        return (
            <div id='home' style={{marginTop:'50px'}}>
                 <ul className="homeplayinglist">
                    {
                        this.state.playinglist.map((item,index)=>
                        <li key={item.id} onClick={(e)=>{this.toDetail(item.id)}}>
                            <img src={item.cover.origin}/>
                            <h3>{item.name}</h3>
                            <p>{item.cinemaCount+"家影院上映  "+item.watchCount+"人购票"}</p>
                        </li>
                        )
                    }
                </ul>
                <Switch>
                    <Route path="/home/Toggle/:id" component={Toggle}/>
                    <Route path="/home/SelectArray" component={SelectArray}/>
                </Switch>
                {this.props.children}
            </div>
        )
    }
}
export default home