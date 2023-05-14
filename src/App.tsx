import React from 'react';
import './App.scss';
import { Login } from './Login';
import { Reg } from './Reg';

export const App: React.FC = () => {
  const [authUser, setAuthUser] = React.useState<any>(null);

  return (
    <div className="App">
      <p>
        {JSON.stringify(authUser)}
      </p>

      <Reg />

      <Login />
    </div>
  );
};
