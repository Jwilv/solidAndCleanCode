//import axios from 'axios';


//eliminamos axios y usamos fetch para no tener dependencias de terceros 
export class HttpClient{

    async get( url : string){
        const resp = await fetch(url)
        const data = await resp.json()
        return { data, status : resp.status}
    }
}