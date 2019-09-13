import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Pages
import {Header} from '../components/header/Header';
import {Home} from '../components/home/Home';
import {DataTable} from '../components/table/DataTable';

const AppImpl = () => (
    <BrowserRouter>
        <div>
            <Grid container spacing={24}>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/users-list' component={DataTable}/>
                </Switch>
            </Grid>
        </div>
    </BrowserRouter>
);

export const App = hot(module)(AppImpl);
