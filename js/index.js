$(document).ready(function(){

	if (navigator.geolocation){

		navigator.geolocation.getCurrentPosition(function(position){

			var long;
			var lat;

			long = position.coords.longitude;
			lat = position.coords.latitude;
			var api = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=3742db9243a6c10245c851f33144d883';	
      
		$.getJSON(api, function(data){
			
			var weatherType = data.weather[0].description;
			var temp = (data.main.temp - 273.15) + "&deg;C";
      var temp2 = ((data.main.temp) * (9/5) - 459.67).toFixed(0) + "&deg;F";
			var windSpeed = (data.wind.speed * 2.237).toFixed(1);
			var city = data.name;
      var tempSwap = false;
  
			$("#city").html(city);
			$("#weatherType").html(weatherType);
			$("#temp").html(temp);
      $("#temp").click(function(){
        if(tempSwap === true){
          $("#temp").html(temp2);
          tempSwap = false;
        }
        else{
          $("#temp").html(temp);
          tempSwap = true;
        }
      });
			$("#windSpeed").html(windSpeed + " mph Wind");
      
			if(weatherType.indexOf("sunny") >= 0){
				$("#weather").addClass("wi-sunny");
			}

			else if(weatherType.indexOf("cloud") >= 0){
				$("#weather").addClass("wi-cloud");
			}

			else if(weatherType.indexOf("rain") >= 0){
				$("#weather").addClass("wi-rain");
			}

			else if(weatherType.indexOf("wi-snow") >= 0){
				$("#snow").show();
			}

		});

		});

	}

});