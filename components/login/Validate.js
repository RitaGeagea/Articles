export default function Validate(props)   

{  
var hasNumberCheck = /\d/;  
var hasSpecialCharCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
function isLowerCaseCheck(string){return string == string.toLowerCase() && string != string.toUpperCase();}


    if(props.inputIdentifier==="username")
        {
        if(props.enteredValue.length<5){return {isValid:false, errorMessage:"Invalid Username - Too Short"}}      
        if(props.enteredValue.length>10){return {isValid:false, errorMessage:"Invalid Username - Too Long"}}
        return {isValid:true, errorMessage:null}
        }
        if(props.inputIdentifier==="password")
        { 
            let hasNumber = hasNumberCheck.test(props.enteredValue);
            let hasSpecialChar=hasSpecialCharCheck.test(props.enteredValue);
            let hasOnlytLowerCase=isLowerCaseCheck(props.enteredValue);
  
        if(props.enteredValue.length<5){return {isValid:false, errorMessage:"Invalid Password - Too Short"}}
        if(hasOnlytLowerCase){return {isValid:false, errorMessage:"Invalid Password - Upper Case Char is missing"}}      
        if(!hasNumber&&!hasSpecialChar){return {isValid:false, errorMessage:"Invalid Password - Number & Special Char are missing"}}      
        if(!hasNumber&&hasSpecialChar){return {isValid:false, errorMessage:"Invalid Password - Number is missing"}}
        if(hasNumber&&!hasSpecialChar){return {isValid:false, errorMessage:"Invalid Password - Special Char is missing"}}
        return {isValid:true, errorMessage:null}
        }
};


