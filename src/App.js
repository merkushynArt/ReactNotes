import { useState } from 'react';
import './App.css';
import PreviewPost from './components/PreviewPost';
import Welcome from './components/Welcome';
import Welcome1 from './components/Welcome1';

function App() {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [isShow, setIsShow] = useState(false);

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

         <div className="wrapper__3">
            <h3>Придумай пароль</h3>
            <input 
               type="password" 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 7 ? <div>Не надійний пароль</div> : <div>Надійний пароль</div>}
         </div>

         <div className="wrapper__4">
            <button type='button' onClick={() => setIsShow(true)}>Показати</button>
            {isShow && (
            <div>
               Ви вшдкрили ваше повідомлення
               <button type='button' onClick={() => setIsShow(false)}>закрити</button>
            </div>
            )}
         </div>
      </div>
   );
}

export default App;
