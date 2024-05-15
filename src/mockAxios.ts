import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

let mock = new MockAdapter(instance);
mock.onGet('/users').reply(200, {
    users: [
        { id: 1, name: 'John Smith' }
    ]
});

export {instance}