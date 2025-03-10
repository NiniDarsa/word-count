import styled from "styled-components"
import Button from "./Button"
import { useEffect } from "react"


const TextArea=({text,CleanText,setText,arr,setArr,setError, open,setOpen,arrOfNames})=>{
  
 const handleChange=(e)=>{

        let newText=e.target.value
        
        if(newText.includes("<script>")){
           newText=newText.replace("<script>","")
           setError("You cann't write <script> here")
         }else if(newText.includes("@")){
          newText=newText.replace("@","")
          setError("You cann't write @ here")
         }else{
          setError("")
         }
  
        setText(newText)
        
      }
    
useEffect(()=>{
   
    const flatArr=arr.length>0?arrOfNames:[]
    var newArr=CleanText.map((item)=>{
        const indx=flatArr.indexOf(item)
      
        if(indx!==-1){
            return {...arr[indx]}
        }
        return {name:item, clicked:false}
    })
    setArr(newArr)
       
      },[text])

    return (
        <>
        <StyleTextArea
        placeholder="Enter text..." 
        onChange={handleChange} 
        value={text}/>
       <Button open={open} setOpen={setOpen} text="Choose KeyWords"/>
        </>
    )
}
export default TextArea

const StyleTextArea=styled.textarea`
    flex: 3;
    min-height: 100%;
    max-height: 100%;
    border-top-left-radius: .4rem;
    border-bottom-left-radius: .4rem;
    padding: 1rem .5rem;
    position: relative;
    &:focus{
        outline: none;
    }
`;


