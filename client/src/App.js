import { Fragment } from 'react';
import './App.css';
import { Landing } from './components/layouts/Landing';
import { Navbar } from './components/layouts/Navbar';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
