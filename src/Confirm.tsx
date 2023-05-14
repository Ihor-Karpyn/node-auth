import React, { FC } from 'react';

export const Confirm: FC = React.memo(() => {
  const [token, setToken] = React.useState<string>('');

  const submit = () => {
    console.log('s');
  };

  return (
    <div>
      <h1>Confirm</h1>
      <input
        type="text"
        placeholder="token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      <button type="button" onClick={submit}>activate</button>
    </div>
  );
});
