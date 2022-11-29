import { useState } from 'react';
import './App.css';

function App() {
   const [name, setName] = useState('');

   return (
      <div className="App">
         <div className="wrapper__1">
            <div className="input">
               <label className='label'>Имя</label>
               <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <p>Привет {name}</p>
         </div>
      </div>
   );
}

export default App;
