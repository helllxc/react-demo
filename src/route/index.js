
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import App from '../App'
import Login from '../components/login/login'
import Toggle from '../components/toggle'
import SelectArray from '../components/select'
import Home from '../components/home/home'
import Detail from '../components/detail/detail'
const BasicExample = () => (
    <Router>
        <App>
            <div>
                <Route path='/login' component={Login}/>
                <Route exact path="/index">
                    <Home>
                        <Switch>
                            <Route path="/index/Toggle/:id" component={Toggle}/>
                            <Route path="/index/SelectArray" component={SelectArray}/>
                        </Switch>
                    </Home>
                </Route>
               <Route path="/detail/:kerwinId" component={Detail}></Route>
            </div>
        </App>
    </Router>
)

// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// )

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BasicExample