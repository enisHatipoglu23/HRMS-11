import React from 'react'
import { useState, useEffect } from "react";
import { Table, Icon, Header, Button } from 'semantic-ui-react'
import EmployerService from '../services/EmployerService'
import axios from 'axios';

export default function EmployerList() {
    const [employers, setEmployer] = useState([])
    
    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployer().then((result) => setEmployer(result.data.data))
    }, [] ) 


    return (
        <div>
            <div>
                <Header as="h4" icon={Table}>
                    <Icon name="user secret" />
                    <Header.Content>Employer List</Header.Content>
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
                        {employers.map((employer) => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.websiteAdress} </Table.Cell>
                                <Table.Cell>{employer.phoneNumber} </Table.Cell>
                                <Table.Cell>{employer.activation} </Table.Cell>
                                <Table.Cell>{employer.emailVerification} </Table.Cell>
                                <Table.Cell>{Button}</Table.Cell>

                            </Table.Row>

                        ))}


                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
