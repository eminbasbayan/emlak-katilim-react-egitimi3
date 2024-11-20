import { useState } from 'react';

function App() {
  const [state, setState] = useState('Emin Başbayan');

  return (
    <div className="wrapper">
      <p>{state}</p>
      <button onClick={() => setState('Ahmet Demir')}>İsmi Güncelle</button>
    </div>
  );
}

export default App;
