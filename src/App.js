import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/content/Content';
import Dialogs from './components/dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Sidebar />
      <Route path={ '/' || '/profile' }>
        <Content />
      </Route>
      <Route path='/dialogs'>
        <Dialogs />
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
