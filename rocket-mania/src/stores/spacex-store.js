import { writable } from "svelte/store";

export const spacexRockets = writable([]);

const fetchAllRockets = async () => {
    const url = 'https://api.spacexdata.com/v4/rockets';
    const res = await fetch(url);
    const data = await res.json();
    const dataAsArr = Object.values(data);
    spacexRockets.set(dataAsArr);
}

fetchAllRockets();