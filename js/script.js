// Fonction appelée lors du click du bouton
function start() 
{
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast
  wheather(apiWeather)
}

// Fonction appelée lors du click du bouton
function refreshCity() 
{
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(document.getElementById('city-input').value);
  // Appel de la fonction fetchTodayForecast
  wheather(apiWeather)
}

// Fonction appelée lors du click du bouton
function wheather(apiWeather) 
{

  apiWeather.getThreeDaysForecast().then(function(response) 
  {
      // Récupère la donnée d'une API
      // i numéro du jour 0 ajd 1 demain 2 après demain 3 après après demain 

      for (var i = 0; i < 4; i++) 
      {
        const data = response.data.list[i];

        // On récupère l'information principal
        const main = data.weather[0].main;
        const description = data.weather[0].description;
        const temp = data.temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

        // Modifier le DOM
        document.getElementById('today-forecast-main'+i).innerHTML = main;
        document.getElementById('today-forecast-more-info'+i).innerHTML = description;
        document.getElementById('icon-weather-container'+i).innerHTML = icon;
        document.getElementById('today-forecast-temp'+i).innerHTML = `${temp}°C`;
      }
  })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}