function updateTime(){
//Lesvos
let lesvosElement = document.querySelector("#lesvos");
if(lesvosElement){
let lesvosDateElement = lesvosElement.querySelector(".date");
let lesvosTimeElement = lesvosElement.querySelector(".time");
let lesvosTime = moment().tz("Europe/Athens");
lesvosDateElement.innerHTML = lesvosTime.format("MMMM Do YYYY");
lesvosTimeElement.innerHTML = lesvosTime.format("hh:mm:ss [<small>]A[</small>]");
}

//Shanghai
let shanghaiElement = document.querySelector("#shanghai");
if(shanghaiElement) {
let shanghaiDateElement = shanghaiElement.querySelector(".date");
let shanghaiTimeElement = shanghaiElement.querySelector(".time");
let shanghaiTime = moment().tz("Asia/Shanghai");
shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
shanghaiTimeElement.innerHTML = shanghaiTime.format("hh:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

