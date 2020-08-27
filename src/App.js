import React from 'react';

import Router from './Router';

if(process.env.NODE_ENV==='development'){
  process.env.REACT_APP_HOST='http://localhost:5050'
}else{
  process.env.REACT_APP_HOST=''
}

const App=()=> {
  return(
    <>
      <Router/>
    </>
  );
}

export default App;
