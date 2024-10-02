import { createRoot } from 'react-dom/client';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <>
        <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>
          Logout
        </button>
      </>
    );
  }

  return (
    <>
      <h2>Please login</h2>
      <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>
        Login
      </button>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
