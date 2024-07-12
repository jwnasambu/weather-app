const apiKey = '06533e5ffd1d1e231811fe3e744e2c51';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Mombasa';
        
        async function checkWeather() {
            const response = await fetch(apiUrl + `&appid=${apiKey}`);
            var data = await response.json();
            
            console.log(data);
        }

        checkWeather();