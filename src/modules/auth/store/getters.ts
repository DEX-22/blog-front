// import state from "./state"
import {type AuthGetterI,type AuthStateI } from "@/interfaces/login/index"
import type { _GettersTree } from "pinia"

const getters :AuthGetterI= {

    isLoggedIn: ({token}:AuthStateI) => !!token,
  }

  export default getters