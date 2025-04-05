import { regexNonAlphanumericString, whiteSpace } from "../constant/constant"

function cleanText(text){
    return text.replaceAll(whiteSpace, " ")
    .split(" ")
    .filter((word)=>{return word!==""&&!word.match(regexNonAlphanumericString)})
}
export default cleanText

