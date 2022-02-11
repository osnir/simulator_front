import axios from "axios";

const api = axios.create({
/*    baseURL: 'https://sellconsultoria.com/simulator_back/'*/
  baseURL: 'http://localhost:3040/'
});

export { api };