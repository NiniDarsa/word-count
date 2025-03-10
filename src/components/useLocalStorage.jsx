import { useEffect, useState } from "react"

const getInfo=(key,initial)=>{
    const value=localStorage.getItem(key)
    if(value){
     return JSON.parse(value)
    }
    if(typeof initial==="function"){
      return initial()
    }  
   else{ return initial}
}

export const useLocalStorage=(key, initial)=>{
 const [value, setValue]=useState(()=>{
    return getInfo(key, initial)
})

 useEffect(()=>{
   return localStorage.setItem(key, JSON.stringify(value))
 },[value])

 return [value,setValue]
}
