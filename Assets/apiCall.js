$(document).ready(function () {
    var search = $("#searchCity");
    var btn = $("#searchBtn");
    var weather = $("#weather-info");
    var cityResult = $("#city-result");
    
   
    $("#searchBtn").on("click", function (event) {
        event.preventDefault();

        
        var city = $("#searchCity").val();

        $("searchCity").val("");

        const apiKey = "&appid=4f20012991034865a21db6246123c7b9";
        const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response);

            var NameOfCity = `
            <h3>${response.name} ${response.weather[0].icon}</h3>
            `

            var weatherResults = `
            <div>
            <p>Temperature: ${response.main.temp}</p>
            <p>Humidity: ${response.main.humidity}</p>
            <p>Wind Speed: ${response.wind.speed}</p>
            </div>
            `
            
            cityResult.append(NameOfCity)
            weather.append(weatherResults)

            var fiveQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;
                $.ajax({
                    url: fiveQueryURL,
                    method: "GET"
                })
                .then(function(res) {
                    console.log(res)
                    var fiveDay = $("#five-days");
                    var iconOne = $("<img>").attr("src", "http://openweathermap.org/img/w/" + res.list[5].weather[0].icon + ".png" )
                    var fiveDayOneResults = `
                    <li class="card" style="width: 18rem;">
                    ${iconOne}
                    <p> Temp: ${res.list[5].main.temp} </p>
                    <p> Hum: ${res.list[5].main.humidity} </p>
                    </li>
                    `
                    var fiveDay = $("#five-days");
                    var iconOne = $("<img>").attr("src", "http://openweathermap.org/img/w/" + res.list[5].weather[0].icon + ".png" )
                    var fiveDayTwoResults = `
                    <li class="card" style="width: 18rem;">
                    ${iconOne}
                    <p> Temp: ${res.list[12].main.temp} </p>
                    <p> Hum: ${res.list[12].main.humidity} </p>
                    </li>
                    `
                    fiveDay.append(fiveDayOneResults)
                    fiveDay.append(fiveDayTwoResults)
                })
    })

        
 
    //     var fiveQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "honolulu" + apiKey;
    //     $.ajax({
    //         url: fiveQueryURL,
    //         method: "GET"
    //     })
    //     .then(function(res) {
    //         console.log(res)
    //         var fiveDay = $("#five-days");
    //         var iconOne = $("<img>").attr("src", "http://openweathermap.org/img/w/" + res.list[5].weather[0].icon + ".png" )
    //         var fiveDayOneResults = `
    //         <li class="card" style="width: 18rem;">
    //         ${iconOne}
    //         <p> Temp: ${res.list[5].main.temp} </p>
    //         <p> Hum: ${res.list[5].main.humidity} </p>
    //         </li>
    //         `
    //         var fiveDay = $("#five-days");
    //         var iconOne = $("<img>").attr("src", "http://openweathermap.org/img/w/" + res.list[5].weather[0].icon + ".png" )
    //         var fiveDayTwoResults = `
    //         <li class="card" style="width: 18rem;">
    //         ${iconOne}
    //         <p> Temp: ${res.list[12].main.temp} </p>
    //         <p> Hum: ${res.list[12].main.humidity} </p>
    //         </li>
    //         `
    //         fiveDay.append(fiveDayOneResults)
    //         fiveDay.append(fiveDayTwoResults)
    })
})