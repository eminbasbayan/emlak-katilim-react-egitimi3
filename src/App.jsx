import { useState } from 'react';

function App() {
  const [state, setState] = useState('Emin Başbayan');
  let fullName = 'Emin Başbayan';

  function handleClick() {
    fullName = 'Ahmet Demir';
    console.log(fullName);
    setState(fullName);
  }

  return (
    <div className="wrapper">
      <p>{state}</p>
      <button onClick={handleClick}>İsmi Güncelle</button>
    </div>
  );
}

export default App;
