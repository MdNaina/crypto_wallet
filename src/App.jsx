import { BrowserRouter } from 'react-router-dom'

import Sidebar from './components/Siderbar';
import Content from './components/Content';
import { useState } from 'react';


function App() {
  const [ expand, setExpand ] = useState(false);
  return (
    <BrowserRouter>
      <div className='relative flex h-screen'>
        <Sidebar expand={expand} />
        <Content setExpand={setExpand}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
