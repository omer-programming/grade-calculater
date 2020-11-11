//write your code here 
//calculate function
function calcy(){    
    
    let english = document.getElementById('eng').value;
    let business = document.getElementById('busi').value;
    let Computer_Science = document.getElementById('IT').value;
    let Accountancy = document.getElementById('Acc').value;
    let Statistics = document.getElementById('stat').value;
    let grades = "";
    

    let totalmarks = parseFloat(english) + parseFloat(business) + parseFloat(Computer_Science) + parseFloat(Accountancy) + parseFloat(Statistics);
    
    let perc = (totalmarks/500) * 100;
    
    if(perc <= 100 && perc >= 80){
        grades = "A";
    }else if(perc <= 79 && perc >= 60){
        grades = "B";
    }else if(perc <= 59 && perc >= 40){
        grades = "C";
    }else{
        grades = "F";
    }
    
    if(perc >= 39.5 ){
        document.getElementById('showdata').innerHTML = `Out of 500 your total is ${totalmarks} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass.`
    }else{
        document.getElementById('showdata').innerHTML = `Out of 500 your total is ${totalmarks} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail.`
    }
    
}