import styled from "styled-components"
import Word from "./Word"
import Button from "./Button"

const HighlitText=({ open, setOpen,  arr,setArr,newArr})=>{
    return(
       open&&<StDiv>
        { 
        arr.map((item,index)=>{
            return <Word 
            arr={arr}
            setArr={setArr}
            key={index} 
            item={item} 
            />
         })
        }
        <Button open={open} setOpen={setOpen} text="close"/>
        </StDiv>
    )
}
export default HighlitText

const StDiv=styled.div`
 padding: 1rem;
 position: absolute;
 overflow-y:scroll ;
 word-wrap: break-word;
 top:0;
 left:0;
 right: 13rem;
 bottom: 0;
 background-color: #cad9e7;
`;