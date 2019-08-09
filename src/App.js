import React, { useEffect } from 'react';

import rest from 'app-packages/rest';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const content = await rest.Video.getVideoContent({ type: 'onDemand'});
      /* so some stuff */
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      APP
    </div>
  );
}

export default App;
