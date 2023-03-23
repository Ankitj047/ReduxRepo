import axios from "axios";

export const apicall = 'http://localhost:3000/todo';
export const healthapicall = "http://localhost:3000/HealthIns";

export const getNormaHealth = async () =>  {
const result = await axios.get(healthapicall)
}

