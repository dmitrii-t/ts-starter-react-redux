import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import DataTable from '../../components/table/DataTable'
import {withStyles} from '@material-ui/core'

const styles = require('./Data.css')

export const Data: React.FunctionComponent = () => (
    <Grid item xs={12}>
        <DataTable/>
    </Grid>
)

export default withStyles(styles)(Data)
