import { punctuationMarks, whiteSpace } from "../constant/constant"

function cleanText(text){
    return text.replaceAll(whiteSpace, " ")
    .split(" ")
    .filter((word)=>{return word!==""&&!word.match(punctuationMarks)})
}
export default cleanText

