import './index.css'

const History = () => {
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  return (
    <div className="search-history">
      <h2>Search History</h2>
      {searchHistory.map((item, index) => (
        <div key={index} className="history-item">
          <p>
            <strong>{item.city}:</strong> {item.data.main.temp} °C
          </p>
          {/* Display more information if needed */}
        </div>
      ))}
    </div>
  );
};

export default History;