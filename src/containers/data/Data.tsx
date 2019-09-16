import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import DataTableContainer from '../../components/table/DataTable'
import {withStyles} from '@material-ui/core'

const styles = require('./Data.css')

export const Data: React.FunctionComponent = () => (
    <Grid item xs={12}>
        <DataTableContainer/>
    </Grid>
)

export default withStyles(styles)(Data)
