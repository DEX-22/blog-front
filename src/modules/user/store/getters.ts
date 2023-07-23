import type {UserStateI } from "@/interfaces/login";

export default{

    hasData: ({id}:UserStateI) => !!id,
    welcome: ({name}:UserStateI) => `Welcome ${name}`,
}