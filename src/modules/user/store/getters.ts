import type {UserStateI } from "@/interfaces/login";

export default{

    hasData: ({id}:UserStateI) => !!id,
    welcome: ({name}:UserStateI) => `Welcome ${name[0].toLocaleUpperCase().concat(name.split('').splice(1).join(''))}`,
}