
import  handlerFactory  from '../../src/shared/handlerFactory.js';
import React, { useEffect, useState,useContext } from 'react';
import '../sass/main.scss';
import axios from 'axios'
import { AuthContext } from '../../src/shared/context/auth-context';
import BarChart from'../shared/components/UIElements/BarChart';
import BarChartYaer from'../shared/components/UIElements/BarChartYaer.js';
import BarChartYaerType from'../shared/components/UIElements/BarChartYaerType';
import DoughnutChart from'../shared/components/UIElements/DoughnutChart';
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner';
const Balance = () => {
  const auth = useContext(AuthContext);
  const [loadedUsers, setLoadedUsers] = useState();
  const [descriptionInc, setDescriptionInc] = useState();
  const [valueInc, setvalueInc] = useState();
  const [WarningInc, setWarningInc] = useState(false);
  const [descriptionExp, setDescriptionExp] = useState();
  const [valueExp, setvalueExp] = useState();
  const [WarningExp, setWarningExp] = useState(false);
  const [month1, setMonth] = useState('December');
  const [temp, setTemp] = useState(0);
  const [totalExp, setTotalExp] = useState(0);
  const [totalInc, setTotalInc] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  let resultInc=0;
  let resultExp=0;
  const icons =new Map();
  icons.set('Food',"fas fa-utensils")
  icons.set('Clothing',"fas fa-tshirt")
  icons.set('Culture',"fas fa-ticket-alt")
  icons.set('Loan',"fab fa-leanpub")
  icons.set('Household Expenses',"fas fa-home")
  icons.set('Vehicle',"fas fa-car")
  icons.set('General Exp',"fas fa-money-check-alt")
  const iconsInc =new Map();
  iconsInc.set('Salary',"fas fa-coins")
  iconsInc.set('Bit',"fas fa-comment-dollar")
  iconsInc.set('General Inc',"fas fa-wallet")
  iconsInc.set('Loan_repayment',"fab fa-leanpub")
  now = new Date();
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  month = now.getMonth();
  year = now.getFullYear();
  var now, months, month, year;
 
 
  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        


        
         ///HTTP REQUEST
         const  responseData= await  axios({
          method: "get",
          url:  `https://balance202.herokuapp.com/api/v1/users/${auth.userId}`,
          
         
        })
     
      
        setLoadedUsers(responseData.data.data.data);
        responseData.data.data.data.income.map(item =>resultInc= parseInt(item.value)+resultInc)
        setTotalInc(resultInc)
        responseData.data.data.data.expense.map(item =>resultExp= parseInt(item.value)+resultExp)
        setTotalExp(resultExp)
        setIsLoading(false);
      
      } catch (err) {
        setIsLoading(false);
        console.log(err);/* setIsLoading(false); */}
    };
    fetchUsers();
  }, [auth.userId,temp]);

  var selectm =  () =>{

    let e = document.getElementById("month");
    let strUser = e.options[e.selectedIndex].text;
    setMonth(strUser)
    setTemp(temp+1)
  }

  var add =  async() =>{
   
    let fleg =true
    setWarningInc(false)
    var e = document.getElementById("inc");
    var strUser = e.options[e.selectedIndex].text;
    if(descriptionInc===undefined||valueInc===undefined||valueInc===""||descriptionInc==="")
    { setWarningInc(true)
      fleg=false
    }
  
     if(fleg){

     let myObj ={

      description:descriptionInc,
      value:valueInc,
      IncomeType :strUser,
      month:month1

     }
     let totalIncome = parseInt(loadedUsers.totalIncome)
     totalIncome=totalIncome+parseInt(valueInc)
     totalIncome =totalIncome+""
     let Objarr =loadedUsers.income
     Objarr.push(myObj);

      await  axios({
      method: 'PATCH',
      url:   `https://balance202.herokuapp.com/api/v1/users/${auth.userId}`,
      data: {
        income:Objarr,
        totalIncome:totalIncome
      },
      headers: {
       "Access-Control-Allow-Origin" : "*",
       "Content-type": "Application/json",
       "Authorization": `Bearer ${auth.token}`
       }   
       
    }) .catch(function (error) {
     
        console.log(error);
      }
    );
   
    setTemp(temp+1)
     }
     
  }
  var addDescriptionInc =  (event) =>{
    setWarningInc(false)
    setDescriptionInc(event.target.value);
    
  }
 
  var addvalueInc =  (event) =>{
    setWarningInc(false)
    setvalueInc(event.target.value);
   
  }

  var deduct =  async() =>{
  
    setWarningExp(false)
    let fleg =true
    var e = document.getElementById("exp");
    var strUser = e.options[e.selectedIndex].text;
    
    if(descriptionExp===undefined||valueExp===undefined||valueExp===""||descriptionExp==="")
   { setWarningExp(true)
    fleg=false}
  
    if(fleg)
    { let myObj ={

      description:descriptionExp,
      value:valueExp,
      ExpenseType :strUser,
       month:month1
     }
  let totalIncome = parseInt(loadedUsers.totalIncome)
     totalIncome=totalIncome-parseInt(valueExp)
     totalIncome =totalIncome+""
     let Objarr =loadedUsers.expense
     Objarr.push(myObj);

      await  axios({
      method: 'PATCH',
      url:   `https://balance202.herokuapp.com/api/v1/users/${auth.userId}`,
      data: {
        expense:Objarr,
        totalIncome:totalIncome
      },
      headers: {
       "Access-Control-Allow-Origin" : "*",
       "Content-type": "Application/json",
       "Authorization": `Bearer ${auth.token}`
       }   
    }) .catch(function (error) {
   
        console.log(error);
      }
    );
 
    setTemp(temp+1)
     }
  }
  var deductDescription =  (event) =>{
    setWarningExp(false)
    setDescriptionExp(event.target.value);
  
  }
 
  var deductvalue =  (event) =>{
    setWarningExp(false)
    setvalueExp(event.target.value);
   
  }
  const DeleteInc = async(item) => {
   
    let totalIncome =loadedUsers.totalIncome
    totalIncome=totalIncome-item.value
     let Objarr =loadedUsers.income
    /*  Objarr.push(myObj); */
   



const index = Objarr.indexOf(item);
if (index > -1) {
  Objarr.splice(index, 1);
}

     await  axios({
      method: 'PATCH',
      url:   `https://balance202.herokuapp.com/api/v1/users/${auth.userId}`,
      data: {
        income:Objarr,
        totalIncome:totalIncome
      },
      headers: {
       "Access-Control-Allow-Origin" : "*",
       "Content-type": "Application/json",
       "Authorization": `Bearer ${auth.token}`
       }   
    }) .catch(function (error) {
    
        console.log(error);
      }
    );
   
    setTemp(temp+1)
  }
  const DeleteExp = async(item) => {

    let totalIncome = parseInt(loadedUsers.totalIncome)
    totalIncome=totalIncome+parseInt(item.value)
    totalIncome =totalIncome+""
  
    let Objarr =loadedUsers.expense

const index = Objarr.indexOf(item);
if (index > -1) {
  Objarr.splice(index, 1);
}

     await  axios({
      method: 'PATCH',
      url:   `https://balance202.herokuapp.com/api/v1/users/${auth.userId}`,
      data: {
        expense:Objarr,
        totalIncome:totalIncome
      },
      headers: {
       "Access-Control-Allow-Origin" : "*",
       "Content-type": "Application/json",
       "Authorization": `Bearer ${auth.token}`
       }   
    }) .catch(function (error) {
    
        console.log(error);
      }
    );
  
    setTemp(temp+1)

  }
  
  
if(!!loadedUsers){
  var arrIncom = loadedUsers.income.filter(item =>item.month === month1)
  var arrExp = loadedUsers.expense.filter(item =>item.month === month1)
 var sumExpMonth =handlerFactory.FunSumExpMonth(loadedUsers,months)
 var sumIncMonth =handlerFactory.FunSumIncMonth(loadedUsers,months)
 }       
let arrFood = handlerFactory.Exp_month_type('Food',loadedUsers,months)
let arrClothing = handlerFactory.Exp_month_type('Clothing',loadedUsers,months)
let arrCulture = handlerFactory.Exp_month_type('Culture',loadedUsers,months)
let arrLoan = handlerFactory.Exp_month_type('Loan',loadedUsers,months)
let arrHousehold = handlerFactory.Exp_month_type('Household Expenses',loadedUsers,months)
let arrVehicle = handlerFactory.Exp_month_type('Vehicle',loadedUsers,months)
let arrGeneral = handlerFactory.Exp_month_type('General Exp',loadedUsers,months)

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
 {!isLoading &&!!loadedUsers &&<div className="containerBalance">
 
          <div className="top">
          <select className="add__typeMonth" id='month' onClick={selectm}>
                        <option value="exp" selected>January</option>
                        <option value="exp" selected>February</option>
                        <option value="exp" selected>March</option>
                        <option value="exp" selected>April</option>
                        <option value="exp" selected>May </option>
                        <option value="exp" selected>June</option>
                        <option value="exp" selected>July </option>
                        <option value="exp" selected>August </option>
                        <option value="exp" selected>September </option>
                        <option value="exp" selected>October </option>
                        <option value="exp" selected>November </option>
                        <option value="exp" selected>December </option>
                     
                    </select>
                 <div className="budget__title">
                    Available Budget in <span className="budget__title--month">  {year}</span>:
                </div>
                <div className={loadedUsers.totalIncome>0 ? 'budget__valuePostiv' : 'budget__value'}>{loadedUsers.totalIncome}</div>
            
            </div>
            
            <div className="bottom">
              <div className="add-exp">
                 <div className="add__container">
                 
                    <select className="add__type" id='exp'>
                        <option value="exp" selected>Food</option>
                        <option value="exp" selected>Clothing</option>
                        <option value="exp" selected>Culture</option>
                        <option value="exp" selected>Loan</option>
                        <option value="exp" selected>Household Expenses</option>
                        <option value="exp" selected>Vehicle</option>
                        <option value="exp" selected>General Exp </option>
                     
                    </select>
                    <input type="text" className="add__description" placeholder="Add description"  id='descriptionExp' onChange={deductDescription}/>
                    <input type="number" className="add__value" placeholder="Value" id='valueExp' onChange={deductvalue}/>
                    <button className="button" onClick={deduct}>ADD</button> 
                </div>
                {!!WarningExp&&<label className="Warning">Enter description and value</label>}
    
            </div>
        
            <div className="add-inc">
            <div className="add__container">
                    <select className="add__type" id='inc'>
                        <option value="inc" selected>Salary</option>
                        <option value="inc" selected>Bit</option>
                        <option value="inc" selected>Loan_repayment</option>
                        <option value="inc" selected>General Inc</option>
                    </select>
                    <input type="text" className="add__description" placeholder="Add description" id='descriptionInc' onChange={addDescriptionInc}/>
                    <input type="number" className="add__value" placeholder="Value" id='valueInc' onChange={addvalueInc}/>
                    <button className="button" onClick={add}>ADD</button>
                </div>
                {!!WarningInc&&<label className="Warning">Enter description and value</label>}
            </div>
         
  </div>


<ul className="containerList ">
                <div className="income">
                    <h2 className="icome__title">Income</h2>
                    
                    <div className="income__list">
                    {arrIncom.map(item =>
                      
                      
                      <div className="item clearfix"> 
                      <h1 className="item__description"><b className="item__type"><i className={iconsInc.get(item.IncomeType)}></i></b>&nbsp;&nbsp;&nbsp;&nbsp; {item.description}</h1>
                      <div className="right clearfix">
                        <div className="item__value">{item.value}</div>
                        <div class="budget__income--percentage">{handlerFactory.percentage(item,months,month1,sumIncMonth)}</div>
                        <div className="item__delete">
                          <button className="item__delete--btn"  onClick={()=>DeleteInc(item)}>x
                          </button>
                          </div>
                          </div>
                          </div>
                      
                      )}  
               
                      
                        
                    </div>
                </div>
                <div className="expenses">
                    <h2 className="expenses__title">Expenses</h2>
                    
                    <div className="expenses__list">
                           {arrExp.map(item =>
                    <div className="item clearfix" id="exp-0"> 
             <h1 className="item__description"><b className="item__type"><i className={icons.get(item.ExpenseType)}></i></b>&nbsp;&nbsp;&nbsp;&nbsp;{item.description}</h1>
              <div className="right clearfix">
                <div className="item__value">{item.value}</div>
                <div class="budget__expenses--percentage">{handlerFactory.percentage(item,months,month1,sumIncMonth)}</div>
                <div className="item__delete">
                  <button className="item__delete--btn" onClick={()=>DeleteExp(item)}>x
                  </button>
                  </div>
                  </div>
                  </div>
                      
                      )}  
                    </div>
                </div>
               
            </ul>
        
            <div className="bar">
            <div className="barCartRow">
            
           {!!loadedUsers && <BarChartYaerType  General={arrGeneral} Vehicle={arrVehicle} Household={arrHousehold}Loan={arrLoan}Culture={arrCulture} Food={arrFood} Clothing={arrClothing}/>}
           {!!loadedUsers && <BarChartYaer  sumExpMonth={sumExpMonth} sumIncMonth={sumIncMonth}/>}
          
           </div>
           <BarChart  totalInc={totalInc} totalExp={totalExp}/>
           { <DoughnutChart expenses ={loadedUsers.expense} />}
        </div>
        </div>
        }
                  
   
</React.Fragment>
  );
};



export default Balance;