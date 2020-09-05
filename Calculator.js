
document.getElementById('loan-form').addEventListener('submit' ,calculateResults);


function calculateResults(e){
    console.log('Calculating...');
    e.preventDefault();

//UI variables

const amount=document.getElementById('amount');
const interest=document.getElementById('interest');
const years=document.getElementById('years');

//result variables

const monthlypayment =document.getElementById('monthly-payment');
const totalpayment=document.getElementById('total-payment');
const totalinterest=document.getElementById('total-interest');

const principalamount = parseFloat(amount.value);
const RateofInterstmonthly = parseFloat(intrest.value)/100/12;
const time=parseFloat(years.value)*12;

//Caluculate the monthly intrest value

const x =Math.pow((1+RateofInterstmonthly),time);
const monthlyIncome =(principalamount*x*RateofInterstmonthly)/(x-1);

if(isFinite(monthly)){
    monthlypayment.value =monthly.toFixed(2);
    totalpayment.value=(monthlyIncome * time ).toFixed(2);
    totalinterest.value=((monthlyIncome * time)-principalamount).toFixed(2);

// Show results
    document.getElementById('results').style.display = 'block';

    // Hide loader
    document.getElementById('loading').style.display = 'none';
}
else() {
    console.log('Please check your numbers');
}
}




