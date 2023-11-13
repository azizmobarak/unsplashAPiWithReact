import { BASE_URL } from "../baseUrl"

const clientID = "0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23";

export const getData = async(route?: string, query?: string) => {
const params = query ? "&query=" + query : "";
const client = "/?client_id=" + clientID;
const url = BASE_URL + route + client + params;
const data = await fetch(url, {
  headers: {
    "content-type": "application/json",
  },
})
  .then((res) => res.json())
  .then((response) => response);

  return data;
}