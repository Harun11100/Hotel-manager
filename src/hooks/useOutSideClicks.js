import { useEffect, useRef } from "react"



 export function useOutSideClicks(handler,listenCapturing=true) {
      const ref=useRef()

useEffect(function(){

 
function handleClick(e){
      if (ref.current&& !ref.current.contains(e.target)){
        console.log('hello')
        handler();
      }
    }
  document.addEventListener('click',handleClick,true)
  return ()=>document.removeEventListener('click',handleClick,true)
},[handler,listenCapturing])

   return ref  
}













