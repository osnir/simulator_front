import axios from "axios";

const api = axios.create({
/* baseURL: 'https://www.sellconsultoria.com/api/' */
  baseURL: 'http://localhost:3040/'
});

export { api };