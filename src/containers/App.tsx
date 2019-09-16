import Grid from '@material-ui/core/Grid'
import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// Pages
import {Header} from '../components/header/Header'
import Home from './home/Home'
import Data from './data/Data'
import {Provider} from 'react-redux'
import configureStore from '../store/Store'

const store = configureStore()

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Grid container spacing={24}>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/data' component={Data}/>
                    </Switch>
                </Grid>
            </div>
        </BrowserRouter>
    </Provider>
)

export default App
