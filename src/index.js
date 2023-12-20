function updateTime(){
//Lesvos
let lesvosElement = document.querySelector("#lesvos");
let lesvosDateElement = lesvosElement.querySelector(".date");
let lesvosTimeElement = lesvosElement.querySelector(".time");
let lesvosTime = moment().tz("Europe/Athens");
lesvosDateElement.innerHTML = lesvosTime.format("MMMM Do YYYY");
lesvosTimeElement.innerHTML = lesvosTime.format("h:mm:ss [<small>]A[</small>]");

//Shanghai
let shanghaiElement = document.querySelector("#shanghai");
let shanghaiDateElement = shanghaiElement.querySelector(".date");
let shanghaiTimeElement = shanghaiElement.querySelector(".time");
let shanghaiTime = moment().tz("Asia/Shanghai");
shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

