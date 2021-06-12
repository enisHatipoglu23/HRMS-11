import React from 'react'
import { Header, Image, Table, Button, Icon } from 'semantic-ui-react'
import { useState, useEffect } from "react";
import JobSeekerService from '../services/JobSeekerService';


export default function JobSeekerList() {
    const [jobSeekers, setJobSeeker] = useState([]);
  const colors = ["blue"]
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService.getJobSeeker().then((result) => setJobSeeker(result.data.data));
  }, []);

    
    return (
        <div>
            <Header as= "h4" icon = {Table}>
                <Icon name = "user secret" />
                <Header.Content>Job Seeker List</Header.Content>
            </Header>
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>NatioalityNumber</Table.HeaderCell>
                        <Table.HeaderCell>Birth Year</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobSeekers.map((jobSeeker) => (
                        <Table.Row key = {jobSeeker.id}>
                            <Table.Cell>{jobSeeker.firstName} </Table.Cell>
                            <Table.Cell>{jobSeeker.lastName} </Table.Cell>
                            <Table.Cell>{jobSeeker.nationalityNumber} </Table.Cell>
                            <Table.Cell>{jobSeeker.birthDate} </Table.Cell>
                            <Table.Cell>{Button}</Table.Cell>

                        </Table.Row>

                    )  )}
                    

                </Table.Body>
            </Table>
        </div>
    )
}

