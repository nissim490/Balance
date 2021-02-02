

exports.Exp_month_type = (type,loadedUsers,months) =>{

var sumExpMonth =[]
  
if(!!loadedUsers){
  
for(var i=0;i<months.length;i++)
{
var arrExp2=[];
let result=0;


arrExp2 = loadedUsers.expense.filter(item =>item.month === months[i])
if(arrExp2.length>0)
arrExp2=arrExp2.filter(item =>item.ExpenseType === type)
if(arrExp2.length>0)
arrExp2.map(item =>result= parseInt(item.value)+result)
sumExpMonth.push(result)
}}
console.log(sumExpMonth);

return (sumExpMonth)
}

exports.percentage = (item,months,month1,sumIncMonth) =>{
  let value =parseInt (item.value)
  let index =months.indexOf(month1)
  let sum = sumIncMonth[index]
  if(sum===0)
  return "deficit"
  return Math.round((value/(sum))*100 ) +'%'
}


exports.FunSumExpMonth = (loadedUsers,months)=>{
  var sumExpMonth =[]
  
for(var i=0;i<months.length;i++)
{
var arrExp2=[];
let result=0;
arrExp2 = loadedUsers.expense.filter(item =>item.month === months[i])
if(arrExp2.length>0)
arrExp2.map(item =>result= parseInt(item.value)+result)
sumExpMonth.push(result)
}
return sumExpMonth
}
exports.FunSumIncMonth = (loadedUsers,months)=>{
  
  var sumIncMonth =[]     
for(var i=0;i<months.length;i++)
{

var arrIncom2=[];
let result=0;
arrIncom2=loadedUsers.income.filter(item =>item.month === months[i])

if(arrIncom2.length>0)
{

arrIncom2.map(item =>result= parseInt(item.value)+result)}
sumIncMonth.push(result)
}

return sumIncMonth
}