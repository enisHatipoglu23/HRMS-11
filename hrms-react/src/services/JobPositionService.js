import React from 'react'
import axios from 'axios'
import { get } from 'jquery'

export default class JobPositionService {
    getJobPosition(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }
}
