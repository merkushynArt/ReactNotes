import { useState } from 'react';
import './App.css';
import PreviewPost from './components/PreviewPost';
import Welcome from './components/Welcome';
import Welcome1 from './components/Welcome1';

function App() {
   const [name, setName] = useState('');

   return (
      <div className="App">
         <div className="wrapper__1">
            <div className="input">
               <label className='label'>Ім'я</label>
               <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
            </div>
            <Welcome name={name}/>
            <Welcome1>{name}</Welcome1>
         </div>
         <div className="wrapper__2">
            <PreviewPost title="Заголовок 1" shortDescription="Коротке описання посту 1"/>
            <PreviewPost title="Заголовок 2" shortDescription="Коротке описання посту 2"/>
         </div>
      </div>
   );
}

export default App;
