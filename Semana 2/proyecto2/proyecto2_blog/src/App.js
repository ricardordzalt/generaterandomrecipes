import React from 'react';
import Blog from './components/Blog';

function App() {
  return (
    <div> 
      <Blog titulo="Blog1" categoria="Ciencia Ficción"  dia="01" mes="02" año="2020"
      extracto= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti expedita saepe 
      fuga modi vero, quibusdam magni ipsum similique aspernatur aperiam placeat ducimus ullam, 
      porro et itaque, consequatur nam harum temporibus?" autor="Richie Valens" dia="01" mes="02" año="2020" />
    </div>
  );
}

export default App;
