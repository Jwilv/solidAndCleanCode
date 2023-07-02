// import axios from "axios";

import { HttpClient } from "./02-open-close-c";


export class TodoService {

    private http: HttpClient;

    constructor(httpClient: HttpClient) {
        this.http = httpClient;
    }

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }

}

export class PostService {

    private http: HttpClient;

    constructor(httpClient: HttpClient) {
        this.http = httpClient;
    }

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts/');
        return data;
    }

}

export class PhotosService {

    private http: HttpClient;

    constructor(httpClient: HttpClient) {
        this.http = httpClient;
    }

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos/');
        return data;
    }

}