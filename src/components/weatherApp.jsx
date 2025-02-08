import { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

const API_KEY = "4f672da85c911bcb2a053921034026d6";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(data);
    } catch {
      alert("Error fetching weather data");
    } finally {
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#1f1f1f] rounded-2xl p-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Today's Weather</h1>
          <div className="flex gap-4 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Search city (e.g., Atlanta, Georgia)"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
              className="flex-1 bg-[#2b2b2b] border border-[#2b2b2b] rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
            />
            <button
              onClick={fetchWeather}
              className="bg-[#2b2b2b] text-white rounded-xl py-4 px-8 font-semibold flex items-center gap-3 cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
        {weather && <WeatherDetails weather={weather} />}
      </div>
    </div>
  );
};

export default WeatherApp;
