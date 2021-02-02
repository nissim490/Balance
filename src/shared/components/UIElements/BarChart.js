import { scaleService } from 'chart.js';
import React, { Component} from 'react'
import { Bar } from 'react-chartjs-2';
import Card from '../UIElements/Card';


const BarChart = props => {
    let max =0;
    let min =0;
  let Expenses =[]
  let Income =[]
  Expenses.push(props.totalExp)
  Income.push(props.totalInc)
  
if (props.totalExp>props.totalInc)
    {max=props.totalExp
    min=props.totalInc}
    else
    {min=props.totalExp
        max=props.totalInc}
const data = {

    labels:[2021],
    datasets:[
       
       
        
        {
            label:'Expenses',
            data:Expenses,
            borderColor:['#d3070086'],
            backgroundColor:['#d3070086']
           
        },
        
        {
            label:'Income',
            data:Income,
            borderColor:['rgb(48, 151, 23,0.5)'],
            backgroundColor:['rgb(48, 151, 23,0.5)']
           
        }
      
        
    
    ]
}
const options ={

    title:{
        display:true,
        text:" Total expenses and income by yaer "
        },
scales:{
yAxes:[
    {
        ticks:{
            min:0,
            max:max+(max*0.2),
            stepSize:max*0.2
        }
    }
]

}

}
    return(
       
            
         <Card className="barCart">
      <Bar className='authentication' data={data} options={options}/>
     </Card>

        )
}
export default BarChart; 