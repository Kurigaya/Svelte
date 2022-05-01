import {writable} from "svelte/store";

let user = {"001":{name:"Punyanuch",pass:"1234"},
            "002":{name:"Kanpitcha",pass:"5678"},
            "003":{name:"Peerapat",pass:"0123"}};

let size = {s:0, l:0};
let paytotal = Number(0);
export const total = writable(paytotal);
export const pizzaorder = writable(size);
export const accounts = writable(user);
export const islogin = writable(false);
export const page = writable('');
export const account = writable('');
