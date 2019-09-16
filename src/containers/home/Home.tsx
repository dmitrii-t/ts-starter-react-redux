import Grid from '@material-ui/core/Grid'
import * as React from 'react'
import {withStyles} from '@material-ui/core'

const styles = require('./Home.css')

export const Home: React.FunctionComponent = () => (
    <Grid item xs={12}>
    </Grid>
)

export default withStyles(styles)(Home)
