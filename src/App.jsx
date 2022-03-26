import './App.css';
import { useState, useEffect } from 'react';

//チェックボックスの初期値を設定
const App = () => {
  const checkboxLength = 3;
  const getInitialValues = () => Array(checkboxLength).fill(false);
  const [checked, setChecked] = useState(getInitialValues());

  //ローカルストレージに保存されているチェックボックスの結果を取得
  useEffect(() => {
    const json1 = localStorage.getItem('checked');
    if (json1) {
      const array1 = JSON.parse(json1);
      setChecked(array1);
    }
  }, []);

  // チェックボックスの結果をローカルストレージに保存
  const onChange = (e, i) => {
    const array1 = checked.map((x2, i2) => (i2 === i ? e.target.checked : x2));
    setChecked(array1);
    const json1 = JSON.stringify(array1);
    localStorage.setItem('checked', json1);
  };

  // 複数のチェックボックス
  const checkboxes = checked.map((x, i) => (
    <div>
      <label>
        チェックボックス{i + 1}
        <input type='checkbox' checked={x} onChange={(e) => onChange(e, i)} />
      </label>
    </div>
  ));

  //ローカルストレージの内容削除
  const removeCheckbox = () => {
    localStorage.clear();
    setChecked(getInitialValues());
  };

  return (
    <div className='App'>
      <h1>リロードしても消えないチェックボックス</h1>
      {checkboxes}
      <button onClick={removeCheckbox}>チェックを全て外す</button>
    </div>
  );
};

export default App;
