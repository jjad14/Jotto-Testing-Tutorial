import axios from "axios";

export const getSecretWord = () => {
	// TODO: write the actual action in Redux / Context section
	return axios.get("http:localhost:3030").then((res) => res.data);
};
