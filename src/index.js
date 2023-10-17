// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}


import ReactDOM from 'react-dom/client';
import Home from "./views/Home/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home/>
  </>
);