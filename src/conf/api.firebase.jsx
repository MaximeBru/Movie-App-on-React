import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://films-c88b3.firebaseio.com/'
});

export default apiFirebase;