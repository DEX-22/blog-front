import {darkModeStore} from '@/store/darkmode'
 
export function darkMode(){
            const darkMode = darkModeStore() 
            return darkMode
        } 
// export function getTheme(){
//     const theme = localStorage.getItem('theme')
//     const  darkMode = darkModeStore()

//     if(!theme)
//         localStorage.setItem('theme','light')
     
//     darkMode.toggle()
    
// }
 