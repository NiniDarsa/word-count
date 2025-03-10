import styled from "styled-components"

const Word=({item, arr, setArr})=>{
   
    const handleClick=()=>{
        let newArray=arr.map((i)=>{
                if(i.name===item.name){
                    return {...i, clicked:!i.clicked}
                }else{
                    return {...i}
                }
            })
            setArr(newArray)
    }
    
    return(
        <StyleWord
         $clicked={item.clicked}
         onClick={handleClick}
         >{item.name}</StyleWord> 
    )
}
export default Word;

const StyleWord=styled.span`
 color: ${props=>props.$clicked?"yellow":""};
 padding-right:.7rem ; 
 cursor: pointer;
`;


  
 