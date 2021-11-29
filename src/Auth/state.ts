import StorageHandler from "../Utils/StorageHandler";
import UserAuthenticated from "./UserAuthenticated";

let state: UserAuthenticated = {
    token: '',
    emai: '',
    ui: 0,
    lastname: '',
    firstname: '',
    fullname: '',
    gender: false,
    exp: 0,
    avatar: '',
    age: 0,
}

const current_logged = StorageHandler.get('scm_current_logged');

if (current_logged !== null) {
    state = JSON.parse(current_logged);
}

export default state;