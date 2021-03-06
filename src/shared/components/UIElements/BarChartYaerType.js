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
            label:'Food',
            data:props.Food,
            borderColor:['rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)'],
            backgroundColor:['rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)','rgb(255, 255, 0,0.5)']
           
        },
        
        {
            label:'Clothing',
            data:props.Clothing,
            borderColor:['rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)'],
            backgroundColor:['rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)','rgb(255, 51, 0,0.5)']
           
        },
        {
            label:'Culture',
            data:props.Culture,
            borderColor:['rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)'],
            backgroundColor:['rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)','rgb(48, 21, 253,0.5)']
           
        },
        {
            label:'Loan',
            data:props.Loan,
            borderColor:['rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)'],
            backgroundColor:['rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)','rgb(48, 251, 223,0.5)']
           
        },
        {
            label:'Household',
            data:props.Household,
            borderColor:['rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)'],
            backgroundColor:['rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)','rgb(48, 151, 23,0.5)']
           
        },
        {
            label:'Vehicle',
            data:props.Vehicle,
            borderColor:['rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)'],
            backgroundColor:['rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)','rgb(98, 71, 19,0.5)']
           
        },
        {
            label:'General',
            data:props.General,
            borderColor:['rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)'],
            backgroundColor:['rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)','rgb(600, 165, 266,0.5)']
           
        },
      
        
    
    ]
}
const options ={

    title:{
        display:true,
        text:"Expenses type by month "
        },
scales:{
yAxes:[
    {
        ticks:{
            min:0,
            max:max,
            stepSize:max*0.2
        }
    }
]

}

}
    return(
      
            
         <Card className="barCartYaerType">
      <Bar className='authentication' data={data} options={options}/>
     </Card>

     )
}
export default BarChart; 