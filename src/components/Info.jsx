import styled from "styled-components"

const Info=({Information})=>{
    return(
        <StyleInfo>
                <Section number={Information.WordsLength} description="words"/>
                <Section number={Information.CharactersLength} description="Characters"/>
                <Section number={Information.ParagraphLength} description="paragraph"/>
                <Section number={Information.Sentances} description="sentances"/>
                <Section number={Information.InstagramLimit} description="Instagram"/>
                <Section number={Information.FacebookLimit} description="Facebook"/>
         </StyleInfo>
    )
}
export default Info;

const Section=({number, description})=>{
    return (
       <StyleBox>
         <span>{number}</span>
         <span>{description}</span>
       </StyleBox>
    )
}

const StyleInfo=styled.div`
        flex:2;
        display: flex;
        flex-wrap: wrap;
`;
const StyleBox=styled.div`
    flex: 1;
    border: 1px solid #989595cc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    span:first-child{
        font-weight: 800;
    }
`;