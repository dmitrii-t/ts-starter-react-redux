import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import {DataTable} from '../table/DataTable';
import {IRecord} from '../../model/IRecord';

const styles = require('./Home.css');

const records: IRecord[] = [
    {key: '1', value: 'qwe'},
    {key: '2', value: 'asd'},
    {key: '3', value: 'zxc'},
];

export const Home: React.FunctionComponent = () => (
    <Grid item xs={12}>
        <DataTable rows={records}/>
    </Grid>
);
