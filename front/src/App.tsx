import React, {
  useState,
} from 'react';
import Routes from './routes'

interface User {
  name: string;
  login: string;
}


const App: React.FC = () => {



  return (
    <div className="container">
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
