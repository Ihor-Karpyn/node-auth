import React, { FC } from 'react';

export const Login: FC = React.memo(() => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const submit = () => {
    console.log('s');
  };

  return (
    <div>
      <h1>login</h1>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button">login</button>
    </div>
  );
});
