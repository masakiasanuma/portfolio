import React from 'react'
import Grid from '@material-ui/core/Grid'
import Expansion from './components/expansions'

const App = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Masaki Asanuma</h1>
                    <img src={require('./images/profile.jpg')} alt="Masaki Asanuma" class="center" />
                </Grid>
                <Grid item xs={12}>
                    <Expansion />
                </Grid>
            </Grid>
        
        </div>
    )
}

export default App