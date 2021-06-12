import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'
import Categories from './Categories'
import EmployerList from '../pages/EmployerList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobPositionList from '../pages/JobPositionList'




export default function List() {
    return (
      <div>
      <Grid columns={4} celled="internally" divided="vertically" >
        <Grid.Row>
          <Grid.Column width={16}>
            <EmployerList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <JobSeekerList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <JobPositionList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <JobAdvertisementList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
}
