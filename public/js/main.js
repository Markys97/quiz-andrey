let quizAnswers= document.querySelectorAll('.quiz__answer');
let userAnswers=[];
let table= document.querySelector('.quiz__table');
let reset= document.querySelector('.quiz__reset');

quizAnswers.forEach(userAnswer=>{
    
    userAnswer.addEventListener('click',e=>{
      let isCorrect= e.target.dataset.correct;
      let questionNumber= e.target.dataset.number
      userAnswers.push({questionNumber,isCorrect})

      e.target.parentNode.innerHTML=`<p class="quiz__playe"> PLAYED</p>`

     
      
      if(userAnswers.length ===5){
          document.querySelector('.quiz__btn').style.display='flex'
      }
    })
})

document.querySelector('.quiz__btn').addEventListener('click',e=>{
    for(let i=0; i<userAnswers.length;i++){
        let tr= document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        td1.innerText= userAnswers[i].questionNumber;
        td2.innerText=userAnswers[i].isCorrect;
        tr.appendChild(td1)
        tr.appendChild(td2)

        table.appendChild(tr)
    }
    
    document.querySelector('.quiz__result').style.display='block'
})


reset.addEventListener('click',e=>{
    document.querySelector('.quiz__btn').style.display='none';
    document.location.reload()
})