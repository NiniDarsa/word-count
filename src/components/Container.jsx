import styled from "styled-components"
import Info from "./Info"
import TextArea from "./TextArea"
import { Facebook, Instagram, linebreak,  whiteSpace } from "../constant/constant"
import HighlitText from "./HighlitText"
import KeyWord from "./KeyWord"
import {useLocalStorage} from "./useLocalStorage"
import cleanText from "./cleanText"


const Container=()=>{
    const [text,setText]=useLocalStorage("text","")
    const [error,setError]=useLocalStorage("error","")
    const [open,setOpen]=useLocalStorage("open", false)
    const [arr, setArr]=useLocalStorage("array", [])
   

    const CleanText=cleanText(text.toLowerCase())   
    const arrOfNames=arr.map((item)=>item.name)

    //////////////////////////////////////
    const CharactersLength=text.replaceAll(whiteSpace,"").length;
    const WordsLength=CleanText.length
    const Sentances= text.match(/[a-z]*[?!.]/g)?text.match(/[a-z]*[?!.]/g).length:0
    const InstagramLimit=Instagram-WordsLength;
    const FacebookLimit=Facebook-WordsLength;

    let ParagraphLength;
   
    if(text.match(linebreak)){
       ParagraphLength =text.match(linebreak).length+1
    }else if(WordsLength>0){
        ParagraphLength = 1
    }else{
        ParagraphLength = 0
    }

    const Information={
        CharactersLength,
        WordsLength,
        InstagramLimit,
        FacebookLimit,
        ParagraphLength,
        Sentances
    }

    return(
        <StyleMain>
            <Stylediv> 
              <TextArea 
              text={text} 
              CleanText={CleanText}
              arr={arr}
              setText={setText} 
              setArr={setArr}
              setError={setError} 
              open={open} 
              setOpen={setOpen}
              arrOfNames={arrOfNames}
              />

              <HighlitText
              arr={arr}
              setArr={setArr}
              open={open} 
              setOpen={setOpen}
              />

              {error&&<p>{error}</p>}

              <Info Information={Information}/> 
              
              <KeyWord arr={arr} text={text} setText={setText} arrOfNames={arrOfNames}/>
            </Stylediv>
         
           
        </StyleMain>
    )
}
export default Container



const StyleMain=styled.div`
 flex:4;
 width: 100%;
 position: relative;
`;
const Stylediv=styled.div`
    width: 80%;
    min-height: 110%;
    background-color: aliceblue;
    border-radius: .4rem;
    position: absolute;
    top:-24%;
    left:50%;
    transform: translateX(-50%);
    z-index: 100;

    display: flex;
   @media (max-width: 800px) {
 flex-direction: column;
}
    p{
     color: red;
     position: absolute;
     bottom: 2%;
     left: 2%;
    }
`;
