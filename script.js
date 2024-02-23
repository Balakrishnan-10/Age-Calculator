var date = document.createElement("input");
date.setAttribute("type","date");
date.id = "dob";

var button = document.createElement("button");
button.setAttribute("type","button")
button.className="btn btn-primary"
button.innerHTML = "Click me"
button.addEventListener("click",date_data)
var break0 = break_create();

document.body.append(date,button)

function break_create(){
    var ele = document.createElement("br");
    return ele;
}
function date_data(){
var input = document.getElementById("dob").value;
var input_date = new Date(input)
var currentdate = new Date();
console.log(currentdate);

var millisec = parseInt(currentdate.getTime()-input_date.getTime())
console.log(millisec);

var second = Math.floor(millisec/1000);
console.log(second);

var minute = Math.floor(second/60);
console.log(minute);
 
var hours = Math.floor(minute/60)
console.log(hours);

var days = Math.floor(hours/24)
console.log(days);

var days = Math.floor(hours/24)
console.log(days);

var years = currentdate.getFullYear() - input_date.getFullYear()
console.log(years);


var month = (years*12)+(currentdate.getMonth()-input_date.getMonth())
console.log(month);

var span = document.createElement("span")
span.innerHTML = `Millisecs: ${span,millisec}`;
var break1 = break_create();

var span1 = document.createElement("span")
span1.innerHTML = `Seconds: ${span1,second}`;
var break2 = break_create();

var span2 = document.createElement("span")
span2.innerHTML = `Minutes: ${span2,minute}`; 
var break3 = break_create();

var span3 = document.createElement("span")
span3.innerHTML = `Hours: ${span3,hours}`;
var break4 = break_create();

var span4 = document.createElement("span")
span4.innerHTML = `Days: ${span4,days}`;
var break5 = break_create(); 

var span5 = document.createElement("span")
span5.innerHTML = `Years: ${span5,years}`;
var break6 = break_create();

var span6 = document.createElement("span")
span6.innerHTML = `Months: ${span6,month}`;
var break7 = break_create();

document.body.append(break0,span,break1,span1,break2,span2,break3,span3,break4,span4,break5,span5,break6,span6,break7)

}

