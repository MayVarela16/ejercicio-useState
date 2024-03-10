import './App.css'

import{useState}from 'react';
import ReactDOM from 'react-dom/client'



function App() {
 const [name, setName] = useState('Sofía');
 const [newName, setNewName] = useState('');

 const handleNameChange = () => {
    if (newName.trim() !== '') {
        setName(newName);
        setNewName('');
      }
    };

    const handleListClick = (newName) => {
        setNewName(newName); 
      };


      const changeName = (e) => {
        e.preventDefault();
        handleNameChange();
      };


  return (
<div className= 'Main-container'>
    <div className= 'container'>
      <h2 className="title">Teacher's Name: {name}</h2>

      <form className="formulario" onSubmit={changeName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="add a name"
          className='input'
        />
      </form>

      <button onClick={handleNameChange} className='boton'>
        Cambiar Nombre
      </button>

      <ul className='lista'>
        <li onClick={() => handleListClick('Data')}>Data</li>
        <li onClick={() => handleListClick('Reyes')}>Reyes</li>
        <li onClick={() => handleListClick('Yolanda')}>Yolanda</li>
      </ul>
    </div>
</div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App
