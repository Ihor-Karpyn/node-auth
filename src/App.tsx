import React from 'react';
import './App.scss';
import { Login } from './Login';
import { Reg } from './Reg';
import { Confirm } from './Confirm';

export const App: React.FC = () => {
  const [authUser] = React.useState<any>(null);

  return (
    <div className="App">
      <p>
        {JSON.stringify(authUser)}
      </p>

      <Reg />

      <Login />

      <Confirm />
    </div>
  );
};
