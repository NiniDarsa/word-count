import styled from "styled-components";
const Footer=()=>{
    return(
        <StFooter> &copy; copyright by Nino Darsa</StFooter>
    )
}
export default Footer

const StFooter=styled.div`
 flex:1;
 position: absolute;
 bottom: 4%;
 left:50%;
 transform: translateX(-50%);
 color: #434242;

`;