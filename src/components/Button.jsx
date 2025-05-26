import styled from "styled-components"

const Button=({open,setOpen,text})=>{
    
    const handleClick=()=>{
       setOpen(!open)
    }
    return(
        <StButton onClick={handleClick}>{text}</StButton>
    )
}
export default Button

const StButton=styled.button`
    position: absolute;
    bottom:2%;
    left:2%;
    width: 20%;
    padding: .5rem;
    border-radius: .1rem;
    color: grey;
    cursor: pointer;
    background-color: aliceblue;
    border: none;
  

`;