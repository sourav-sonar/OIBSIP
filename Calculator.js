let answer=document.getElementById('answer');
buttons= document.querySelectorAll('button');
//value = document.getElementById("b");


let answerValue = '';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText =e.target.innerText;
        var result=answer.value;
        console.log('button text is',buttonText);
        
        if(buttonText=='X'){
            buttonText = '*';
            answerValue += buttonText;
            answer.value = buttonText;
        }
        else if (buttonText =='C'){
            answerValue = "";
            answer.value =answerValue;
        }
        else if (buttonText =='back'){
            answer.value=result.slice(0,-1);  //it will remove last number
            answerValue=answer.value;       // after removing store new value in it  
        }
        else if (buttonText =='History'){
            data=answer+"="+eval(v);
            answer.innerText =data;
            history.appendchild(answer);
        }

        else if (buttonText =='='){
            answer.value =eval(answerValue);
            answerValue=answer.value;
        }
        else
        {
            answerValue += buttonText;
            answer.value = answerValue;
        }
    })
}