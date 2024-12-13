const form = document.querySelector("form")
const guide =document.querySelector("#guide") 
    

form.addEventListener('submit', (e) => {
   e.preventDefault()

    const Height = parseInt(document.querySelector("#Height").value)
    const Weight = parseInt(document.querySelector("#Weight").value)
    const result = document.querySelector("#result")
  
    
    if (Height === "" || Height <= 0 || isNaN(Height)) {
       result.innerHTML=`enter the valied Height value ${Height}`;
        
    }
    else if (Weight === "" || Weight <= 0 || isNaN(Weight)) {
        result.innerHTML=`enter the valied Weight value ${Weight}`;
    }
    else{
       const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
       result.innerHTML = `BMI:- ${bmi}`;

       if(bmi <=18.8)
         {
           guide.innerHTML = "Your BMI weight is :- Under Weight";
           
         }
         else if(bmi >18.8 && result<=24.9)
         {
          guide.innerHTML = "Your BMI Weight is :- Normal";
           
         }
         else{
           guide.innerHTML = "Your BMI weight is :- Overweighted";
           
         }
    }


})