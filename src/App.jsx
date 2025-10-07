import React from 'react';
import CarForm from './components/CarForm.jsx';
import CarList from './components/CarList.jsx';
import CarSearch from './components/CarSearch.jsx';
import CarValue from './components/CarValue.jsx';
function App () {
  return(
    <div>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
)
  
}

export default App;
