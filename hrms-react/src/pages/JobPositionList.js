import React from 'react'
import JobPositionService from '../services/JobPositionService'
import { Table, Icon, Header, Button } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import axios from 'axios';


export default function JobPositionList() {
    const [jobPositions, setJobPositions] = useState([])

    useState(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPosition().then((result) => setJobPositions(result.data.data))
    }, [])

    return (
        <div>
            <Header as="h4" icon={Table}>
                <Icon name="code" />
                <Header.Content>Job Position List</Header.Content>
            </Header>
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job</Table.HeaderCell>
                        <Table.HeaderCell>Advertisement</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobPositions.map((jobPositions) => (
                        <Table.Row key={jobPositions.id}>
                            <Table.Cell>{jobPositions.job} </Table.Cell>
                            <Table.Cell>{jobPositions.jobAdvertisement.jobAdvertisementName} </Table.Cell>
                            

                        </Table.Row>

                    ))}


                </Table.Body>
            </Table>
        </div>
    )
}
