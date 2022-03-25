import React, { Fragment } from 'react';
import Forumulario from './components/Formulario';

function App() {
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className='row'>
          <div className='one-half column'>
            <Forumulario/>
          </div>
          <div className='one-half column'>
            2
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
