import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState({ state: ' ' });

  return (
    <div>
      <h1>Welcome to our Application!</h1>
    </div>
  );
};

export default App;
