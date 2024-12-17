const inputSlider=document.querySelector("[data-length-slider]");
const lengthDisplay=document.querySelector("[data-lengthContainer]");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const dataCopiedMsg=document.querySelector("[data-copied-msg]");
const dataCopiedBut=document.querySelector("[data-copy]");
const uppercase=document.querySelector("#uppercase");
const lowercase=document.querySelector("#lowercase");
const number=document.querySelector("#number");
const symbol=document.querySelector("#symbol");
const strengthIndicator=document.querySelector("[pass-strength]");
const generateButton=document.querySelector(".generateButton");
const allCheckBox=document.querySelectorAll('input[type=checkbox]');

// let password="";
// let passwordLength=10;
// let checkCount=0;
// let symbols='!@#$%^&*()_+|=-\][}{`~:;/.,?><';
// handleSlider();
// setIndicator('#ccc');
// //set password length
// function handleSlider(){
//     inputSlider.value=passwordLength;
//     lengthDisplay.innerText=passwordLength;
// }

// function setIndicator(color){
//     strengthIndicator.style.backgroundColor=color;
// }

// function getRndInt(min,max){
//     return Math.floor(Math.random()*(max-min))+min;
// }

// function  getRndNumber(){
//     return getRndInt(0,9);
// }
// function getRndLowercase(){
//     return String.fromCharCode(getRndInt(97,123));
// }
// function getRndUppercase(){
//     return String.fromCharCode(getRndInt(65,90));
// }
// function getRndSymbol(){
//     let index=getRndInt(0,symbols.length-1);
//     return symbols[index];
// }
// function calcStrength(){
//     let hasUpper=false;
//     let hasLower=false;
//     let hasNumber=false;
//     let hasSymbol=false;

//     if(uppercase.checked) hasUpper=true;
//     if(lowercase.checked) hasLower=true;
//     if(number.checked) hasNumber=true;
//     if(symbol.checked) hasSymbol=true;

//     if(hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength>=8){
//         setIndicator("#0f0");
//     }
//     else if((hasLower||hasUpper) && (hasNumber || hasSymbol) && passwordLength>=6){
//         setIndicator('#ff0');
//     }
//     else{
//         setIndicator('#f00');
//     }
// }
// async function copyPass(){
//     try{
        
//         await navigator.clipboard.writeText(passwordDisplay.value);
//         dataCopiedMsg.innerText='Copied';
//     }
//     catch(e){
//         dataCopiedMsg.innerText='Failed';
//     }

//     dataCopiedMsg.classList.add('active');

//     setTimeout(()=>{
//         dataCopiedMsg.classList.remove('active');
//     },2000);
// }
// inputSlider.addEventListener('input',(e)=>{
//     passwordLength=e.target.value;
//     handleSlider();
// })
// dataCopiedBut.addEventListener('click',()=>{
//     if(passwordDisplay.value)
//     copyPass();
// })
// function handleCheckBoxChange(){
//     checkCount=0;
//     allCheckBox.forEach((checkbox)=>{
//         if(checkbox.checked)
//             checkCount++;
//     });

//     if(passwordLength<checkCount){
//         passwordLength=checkCount;
//         handleSlider();
//     }
// }
// allCheckBox.forEach((checkbox)=>{
//     checkbox.addEventListener('change',handleCheckBoxChange);
// })
// function shufflePassword(arr){
//     console.log(arr);
//     for(let i=arr.length-1;i>0;i--){
//         const j=Math.floor(Math.random() * (i+1));
//         const temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
//     let str="";
//     console.log(arr);
//     arr.forEach((el)=>(str+=el));
//     return str;
// }
// generateButton.addEventListener('click',()=>{

//     console.log('start');
//     if(checkCount<=0){
//         passwordDisplay.value="";
//         return;
//     }

//     if(passwordLength<checkCount){
//         passwordLength=checkCount;
//         handleSlider();
//     }
//     password="";

//     let funcArray=[];
//     if(uppercase.checked)
//         funcArray.push(getRndUppercase);
//     if(lowercase.checked)
//         funcArray.push(getRndLowercase);
//     if(number.checked)
//         funcArray.push(getRndNumber);
//     if(symbol.checked)
//         funcArray.push(getRndSymbol);

//     for(let i=0;i<funcArray.length;i++){
//         password+=funcArray[i]();
//     }
//     console.log('basic addition done');
//     for(let i=0;i<passwordLength-funcArray.length;i++){
//         password+=funcArray[getRndInt(0,funcArray.length)]();
//     }
//     console.log('compulsary addition done' + password);
//     password=shufflePassword(Array.from(password));
//     console.log('shuffling done' + password);
//     passwordDisplay.value=password;
//     console.log('UI addition done');
//     calcStrength();
// })

let password='';
let passwordLength=10;
let checkCount=1;
let symbols='!@#$%^&*()_+|=-\][}{`~:;/.,?><';
handleSlider();
setIndicator('#cccc')
function shufflePassword(arr){
        for(let i=arr.length-1;i>0;i--){
        const j=Math.floor(Math.random() * (i+1));
        const temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    let str="";
    console.log(arr);
    arr.forEach((el)=>(str+=el));
    return str;
}
function handleSlider (){
    inputSlider.value=passwordLength;
    lengthDisplay.textContent=passwordLength;
    let max=Number(inputSlider.max);
    let min=Number(inputSlider.min);
    inputSlider.style.backgroundSize =(((passwordLength-min)/(max-min))*100)+ "% 100%";
    
}
function setIndicator(color){
    
    strengthIndicator.style.cssText=`background-color:${color} ; box-shadow: 0 0 5px 1px ${color}`
}
function getRandInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
function getRandNumber(){
     return getRandInteger(0,9);
}
function getLowercase(){
    return String.fromCharCode(getRandInteger(97,123));

}
function getUppercase(){
    return String.fromCharCode(getRandInteger(65,91));

}
function getSymbol(){
    return symbols[getRandInteger(0,symbols.length)];
}
function clacStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNumber=false;
    let hasSymbol=false;

    if(uppercase.checked) hasUpper=true;
    if(lowercase.checked) hasLower=true;
    if(number.checked) hasNumber=true;
    if(symbol.checked) hasSymbol=true;

    if(hasUpper && hasLower && (hasNumber||hasSymbol) && passwordLength>=8)
        setIndicator('#0f0');
    else if ((hasUpper||hasLower)&&(hasNumber||hasSymbol)&&passwordLength>=6)
        setIndicator('#ff0');
    else
    setIndicator('#f00');
}
async function copyContent() {
    try{
    let value=passwordDisplay.textContent;
    await navigator.clipboard.writeText(value);
    dataCopiedMsg.textContent="Copied"
    }
    catch(e){
        dataCopiedMsg.textContent="!Failed"
    }
    dataCopiedMsg.classList.add('active');   
    setTimeout(()=>{
        dataCopiedMsg.classList.remove('active'); 
        },2000);
}
inputSlider.addEventListener('input',(e)=>{
    passwordLength=inputSlider.value;
    handleSlider();
})
dataCopiedBut.addEventListener('click',()=>{
    if(passwordDisplay.value)
    copyContent();
})
function handleCheckBox(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    });
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
        
}
allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBox)
})
generateButton.addEventListener('click',()=>{
    if(checkCount===0)
        return; 
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }

    password='';
    let funcArray=[];

    if(uppercase.checked)
        funcArray.push(getUppercase);
    if(lowercase.checked)
        funcArray.push(getLowercase);
    if(number.checked)
        funcArray.push(getRandNumber);
    if(symbol.checked)
        funcArray.push(getSymbol);

    for(let i=0;i<funcArray.length;i++){
        password+=funcArray[i]();
    }

    for(let i=0;i<passwordLength-funcArray.length;i++){
        password+=funcArray[getRandInteger(0,funcArray.length)]();
    }
    password=shufflePassword(Array.from(password));
    passwordDisplay.value=password;
    clacStrength();
})