import {headers} from "./utils"
import axios from 'axios';

export const fetchCollection = async (collectionName) =>{
    let api = `${process.env.NEXT_PUBLIC_APIGW_URL}/collections/${collectionName}`
    let response;

    try {
        response = await axios.get(api,headers)
    } catch (error) {
        console.error('ERROR Fetching Collection: ', error)
    }
    return response
}