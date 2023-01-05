
import axios from 'axios';
import {SERVER_URL} from './Index'

export const get_articles = async () => {
    try {
        
        const response = await axios.get(`${SERVER_URL}articles`);

        return response.data;

    } catch (error) {
        console.log(error);
    }
    
}
