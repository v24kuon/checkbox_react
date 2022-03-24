import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [currentCheckboxId, setCheckboxId] = useState({
    naming: false,
    fullname: false,
  });

  useEffect(() => {
    const data = {
      naming: localStorage.getItem('naming') === 'true' ? true : false,
      fullname: localStorage.getItem('fullname') === 'true' ? true : false,
    };
    setCheckboxId(data);
  }, []);

  const setCheckbox = (event) => {
    const naming = event.target.checked;
    localStorage.setItem('naming', naming);

    setCheckboxId((prevData) => ({
      ...prevData,
      naming: naming,
    }));
  };

  const setCheckbox2 = (event) => {
    const fullname = event.target.checked;
    localStorage.setItem('fullname', fullname);

    setCheckboxId((prevData) => ({
      ...prevData,
      fullname: fullname,
    }));
  };

  return (
    <div className='App'>
      <h1>リロードしても消えないチェックボックス</h1>
      <label>
        ニックネーム
        <input type='checkbox' onChange={setCheckbox} id='first' checked={currentCheckboxId.naming} />
      </label>

      <label>
        フルネーム
        <input type='checkbox' onChange={setCheckbox2} id='second' checked={currentCheckboxId.fullname} />
      </label>
    </div>
  );
};

export default App;
