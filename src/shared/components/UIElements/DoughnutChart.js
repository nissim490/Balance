import { scaleService } from 'chart.js';
import React, { Component} from 'react'
import { Doughnut } from 'react-chartjs-2';



const DoughnutChart = props => {
let Food = 0;
let Clothing = 0;
let Culture = 0;
let Household = 0;
let Loan = 0;
let Vehicle = 0;
let General_Exp = 0;
let arrExp = [];



props.expenses.map(x =>{
    let Type= x.ExpenseType
    if (Type==='Food')
    Food = Food +parseInt(x.value)
    if (Type==='Clothing')
    Clothing = Clothing +parseInt(x.value)
    if (Type==='Culture')
    Culture = Culture +parseInt(x.value)
    if (Type==='Household Expenses')
    Household = Household +parseInt(x.value)
    if (Type==='Loan')
    Loan = Loan +parseInt(x.value)
    if (Type==='Vehicle')
    Vehicle = Vehicle +parseInt(x.value)
    if (Type==='General Exp')
    General_Exp = General_Exp +parseInt(x.value)
   
})

arrExp.push(Food)
arrExp.push(Clothing)
arrExp.push(Culture)
arrExp.push(Loan)
arrExp.push(Household)

arrExp.push(Vehicle)
arrExp.push(General_Exp)

/* props.map(p =>if()) */




const data = {

    labels:['Food','Clothing','Culture','Loan','Household','Vehicle','General Exp'],
    datasets:[
        {
            label:'Expence ',
            data:arrExp,
          
            backgroundColor:['rgba(255,99,205,0.5)','rgba(255,205,86,0.5)','rgba(54,162,235,0.5)','rgba(255,159,64,0.5)','rgba(153,102,255,0.5)','rgba(153,12,25,0.5)','rgba(13,102,255,0.5)'],
          
        }
      
    ]
}
const options ={

title:{
display:true,
text:" Total expenses "
}

}
    return(
    
       
            <div className="DoughnutCart">
          <Doughnut data={data} options={options}/>
        
        
            </div>
  )
}
export default DoughnutChart; 