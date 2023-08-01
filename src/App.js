
import './App.css';
import { AppProvider } from './Context';
import HomePage from './HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleMovie from './SingleMovie';
import Error from './Error';
import Favorite from './Favorite';
function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='movie/:id' element={<SingleMovie />} />
            <Route path='Favorite' element={<Favorite />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>

    </div>
  );
}

export default App;
