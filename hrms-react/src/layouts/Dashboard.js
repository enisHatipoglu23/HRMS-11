import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'
import Categories from './Categories'
import EmployerList from '../pages/EmployerList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobPositionList from '../pages/JobPositionList'
import List from './List'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                       <Categories/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <List/>
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
