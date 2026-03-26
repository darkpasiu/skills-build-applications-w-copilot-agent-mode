import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [data, setData] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const apiUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/workouts/`
    : '/api/workouts/';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Workouts data:', results);
        console.log('API endpoint:', apiUrl);
      });
  }, [apiUrl]);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {data.map((item, idx) => (
          <li key={item.id || idx}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
