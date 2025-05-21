
import styled from "styled-components";

const Header=()=>{
    
    return(
        <StHeader>
        <div/>
        <h1><span>Word</span>Counter</h1>
        </StHeader>
    )
}
export default Header

const StHeader=styled.div`
width: 100%;
flex:4;
color: white;
position: relative;

div{
height: 100%;
background-image: url("/back.jpg");
background-position: center; 
background-repeat: no-repeat; 
background-size: cover;
}

h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 15px;
    span{
      font-weight: 800;
      text-shadow: 1px 1px 15px blue;
    }
}
`;