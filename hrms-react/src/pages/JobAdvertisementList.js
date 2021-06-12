import React from 'react'
import JobAdvertisementService from '../services/JobAdvertisementService';
import { Table } from 'semantic-ui-react'
import { useState, useEffect } from "react";

export default function JobAdvertisementList() {

    const [jobAdvertisements, setjobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisement().then((result) => setjobAdvertisements(result.data.data));
      }, []);
    return (
        <div>
            <Table celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Advertisement</Table.HeaderCell>
                        <Table.HeaderCell>Job Position</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Published Date</Table.HeaderCell>
                        <Table.HeaderCell>Quantity Per Position</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Maximum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Expiration Date</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdvertisements.map((jobAdvertisement) => (
                        <Table.Row key={jobAdvertisement.id} >
                            <Table.Cell> {jobAdvertisement.jobAdvertisementName}  </Table.Cell>
                            <Table.Cell>{jobAdvertisement.jobName}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.publishedDate}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.quantityPerPosition}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.advertisementExpirationDate}</Table.Cell>



                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div >
    )
}
