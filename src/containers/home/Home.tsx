import Grid from '@material-ui/core/Grid'
import * as React from 'react'
import {Typography, withStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

const styles = require('./Home.css')

export const Home: React.FunctionComponent = () => (
    <Grid item xs={12}>
        <Typography variant='subheading'>
            Go to <Link to={'/data'}>Data</Link>
        </Typography>
    </Grid>
)

export default withStyles(styles)(Home)
