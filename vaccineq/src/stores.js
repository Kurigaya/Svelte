import { writable } from "svelte/store";

let people = {"001":{name:"Peerapat",pass:"1234"}
            ,"002":{name:"Punyanuch",pass:"0123"}};

        
export const islogin = writable(false);
export const user = writable(people);
export const page = writable('');
export const account = writable('');
export const time = writable('');
export const mydate = writable('');
export const place = writable('');

