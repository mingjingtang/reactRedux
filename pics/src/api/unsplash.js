import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID 04a23f3bda2536fd01799d64f27342770447a9a70f7d5fd32007795fa5c96340'
    }
}); 