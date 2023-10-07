function createlabel(tagnamae,attributename,attributevalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attributename,attributevalue);
    ele.innerHTML=content;
    return ele;
}
function inputele(tagnamae,attributename,attributevalue,attributename1,attributevalue1){
    var inputele = document.createElement(tagname);
    inputele.setAttribute(attributename,attributevalue);
    inputele.setAttribute(attributename1,attributevalue1);
    return inputele;
}
function br(tagname){
var res=document.createElement(tagname);
return res;

}
var firstname=createlabel("label","for","firstname","firstname")