import styled from "styled-components"
import { regexRemovePunctuationAndUnderscore } from "../constant/constant";

const KeyWord=({arr,text,setText,arrOfNames})=>{
  //unique array
   const key = 'name';
  
   const arrayUniqueByKey = [...new Map(arr.map(item =>
   [item[key], item])).values()];

   //Occurence
  function getOccurrence(array, value) {
      return array.filter((v) => (v === value)).length;
  }
 

  //Handle Hover
   let handleHover=(e)=>{
    let newTXT=(text.split(' ').map((item)=>{
      if(item.includes(e.target.innerText)){
        return item.toUpperCase()
      }else{
        return item
      }
    })).join(" ")
    setText(newTXT)     
   }

   //////////////////////
   const handleLeave=(e)=>{
    let newTXT=(text.split(' ').map((item)=>{
      return item.toLowerCase()
    })).join(" ")
    setText(newTXT)
   }

    return(
        <StDiv>
          <StyleContainer>
          <h2>Key Words</h2>
          <ul>
          {arrayUniqueByKey&&arrayUniqueByKey.map((item,indx)=>{
            if(item.clicked){       
            return <li 
            className="li"
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
            key={indx}>{item.name.replace(regexRemovePunctuationAndUnderscore, '')}</li>
            }
          })}</ul>
         </StyleContainer>

         <StyleContainer>
          <h2>Occurency</h2>
          <ul>
          {arrayUniqueByKey&&arrayUniqueByKey.map((item,index)=>{
            if(item.clicked){
              return <li key={index}><span>{item.name.replace(regexRemovePunctuationAndUnderscore, '')}-</span>{getOccurrence(arrOfNames,item.name)}X</li>
            }
          })}</ul>
        </StyleContainer>
        </StDiv>
    )
}
export default KeyWord;

const StDiv=styled.div`
 padding: 1rem;
 flex:1;
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 ul{
  list-style-type: none;
 }
 h2{
    text-align: center; 
    text-decoration: underline;
    font-size: 1rem;
 }
 .li{
  cursor: pointer;
  display: inline;
  margin: .5rem;
  border: 1px solid black;
 }
`;

 const StyleContainer=styled.div`
  box-shadow: 1px 1px 10px 2px #99c3e7;
  padding: 0.5rem;
  width: 20rem;
  word-wrap: break-word;
   
 `