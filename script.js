const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");


async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=320b723bc7244aa2b6252938240102&q=${cityName}&aqi=yes`);

    return await promise.json()

    //Using Asynchronus function.

}

button.addEventListener('click', async () => {  // await function comes under asynchronus func.
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
    

});

//call back function  ----->>>>>    { () = >} : - way to write.

// http://api.weatherapi.com/v1/current.json?key=320b723bc7244aa2b6252938240102&q=London&aqi=yes