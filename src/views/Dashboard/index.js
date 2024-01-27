import "./index.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [error, setError] = useState();
  const [weatherData, setWeatherData] = useState(null);
  // const history = useHistory();

  const apiKey = "31cc7897265a42e32f85b348c9d2af1e";

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      console.log(response, "response....");
      setWeatherData(response.data);
      const searchHistory =
        JSON.parse(localStorage.getItem("searchHistory")) || [];
      searchHistory.push({ city, data: response.data });
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError("City not found");
    }
  };

  return (
    <>
      <div className="main-screen">
        <div className="weather-card">
          <h2>Weather App</h2>
          <input
            className="search-bar"
            type="text"
            placeholder="Search Here..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btnn" onClick={getWeather}>
            Search
          </button>

          {weatherData && (
            <div>
              <h3>Weather in {weatherData.name}</h3>
              <p>Temperature: {weatherData.main.temp} °C</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              {/* Add more weather information as needed */}
            </div>
          )}
          <div>
            <button className="btnn" onClick={() => navigate("/History")}>
              View History
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
