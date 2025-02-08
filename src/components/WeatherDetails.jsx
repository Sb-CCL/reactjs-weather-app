const weatherIcons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
};

const WeatherDetails = ({ weather }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-[#2b2b2b] rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-100 mb-2">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-lg capitalize">{weather.weather[0].description}</p>
        </div>
        <div className="text-8xl">
          {weatherIcons[weather.weather[0].main] || "🌤️"}
        </div>
        <div className="text-6xl font-bold text-white">
          {Math.round(weather.main.temp)}°C
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {["Feels Like", "Humidity", "Wind Speed"].map((label, i) => (
          <div key={i} className="bg-[#2b2b2b] p-6 rounded-xl">
            <p className="text-sm mb-2">{label}</p>
            <p className="text-2xl font-semibold text-gray-100">
              {label === "Feels Like"
                ? `${Math.round(weather.main.feels_like)}°C`
                : label === "Humidity"
                ? `${weather.main.humidity}%`
                : `${weather.wind.speed} m/s`}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 text-gray-300">
        {["Pressure", "Visibility"].map((label, i) => (
          <div key={i} className="p-6 bg-[#2b2b2b] rounded-xl">
            <p className="text-sm mb-2">{label}</p>
            <p className="text-xl font-medium">
              {label === "Pressure"
                ? `${weather.main.pressure} hPa`
                : `${(weather.visibility / 1000).toFixed(1)} km`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
