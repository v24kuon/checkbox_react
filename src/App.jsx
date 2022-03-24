import './App.css';
import { useState } from 'react';
import Cookies from 'js-cookie';

const checkLists = ['パン', 'おにぎり', '焼き肉', 'ラーメン', 'たこ焼き', 'アイスクリーム'];

const CheckBox = ({ id, value, checked, onChange }) => {
  return <input id={id} type='checkbox' name='inputNames' checked={checked} onChange={onChange} value={value} />;
};

const App = () => {
  const check = Cookies.get('check');
  const toBoolean = () => {
    return check.toLowerCase() === 'true';
  };
  const [isChecked, setIsChecked] = useState(toBoolean());
  const handleChange = (e) => {
    setIsChecked({
      ...isChecked,
      [e.target.id]: e.target.checked,
    });
  };

  Cookies.set('check', isChecked);
  return (
    <div>
      <p>リロードしても値が保持されるチェックボックス</p>
      {checkLists.map((item, index) => {
        index = index + 1;
        return (
          <label htmlFor={`id_${index}`} key={`key_${index}`}>
            <CheckBox id={`id_${index}`} value={item} onChange={handleChange} checked={isChecked[item.id]} />
            {item}
          </label>
        );
      })}
      {/* <input type='checkbox' onChange={handleChange} checked={isChecked} /> */}
    </div>
  );
};

export default App;
