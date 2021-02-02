import { scaleService } from 'chart.js';
import React, { Component} from 'react'
import { Bar } from 'react-chartjs-2';
import Card from './Card';


const BarChart = props => {
    let max =0;
    let min =0;
 
  
if (props.totalExp>props.totalInc)
    {max=props.totalExp
    min=props.totalInc}
    else
    {min=props.totalExp
        max=props.totalInc}
const data = {

    labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets:[
       
       
        
        {
            label:'Expenses',
            data:props.sumExpMonth,
            borderColor:['#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086'],
            backgroundColor:['#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086','#d3070086']
           
        },
        
        {
            label:'Income',
            data:props.sumIncMonth,
            borderColor:['rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)'],
            backgroundColor:['rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)']
           
        }
      
        
    
    ]
}
const options ={

    title:{
        display:true,
        text:"Expenses and income by month "
        },
scales:{
yAxes:[
    {
        ticks:{
            min:0,
            max:max,
            stepSize:max*0.4
        }
    }
]

}

}
    return(
      
            
         <Card className="barCartYaer">
      <Bar className='authentication' data={data} options={options}/>
     </Card>

     )
}
export default BarChart; 