import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import ColorList from './components/ColorList';
import apiColors from './api/color';
import { useState } from 'react';
import { validateHTMLColorHex } from "validate-color";
import { v4 as uuidv4 } from 'uuid';
import { COLOR } from './utils/constants';


const App = () => {

  const [colors, setColors] = useState([]);
  const [inputColor, setInputColor] = useState(COLOR.GET);
  const [buttonColor, setButtonColor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("")

  const loadData = async () => {
    setIsLoading(true);
    apiColors.getColor()
      .then(res => {
        const { data } = res;
        handleAddColor(data.hex.value);
        setButtonColor(data.hex.value);
        setInputColor(data.hex.value)
        setError('')
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }

  const handleAddColor = (color) => {
    const id = uuidv4();
    const hex = color;
    const newColor = { id, hex };
    
    if (!colors.some(color => color.hex === newColor.hex)){
      setColors([...colors, newColor]);
      setButtonColor(newColor.hex);
    }
  }

  const handleManualColor = (e) => {
    if (e.key !== 'Enter') return;

    if (!validateHTMLColorHex(inputColor)) {
      alert(COLOR.INVALID);
      return;
    }

    if (colors.some(color => color.hex === inputColor)) {
      alert(COLOR.EXISTS);
      return
    }
    handleAddColor(inputColor);
  };
  return (
    <div className="container">
      <Header/>
      <Button 
        onClick={loadData}
        color={buttonColor} 
        text={inputColor} 
        disabled={isLoading}
      />
      <input 
        onChange={event => setInputColor(event.target.value)} 
        placeholder={COLOR.PLACEHOLDER} 
        type="text" 
        onKeyPress={handleManualColor}
      />
      {error && (<p>{error}</p>)}
      <ColorList 
        colors={colors} 
        buttonColor={buttonColor} 
      />
    </div>
  );
}

export default App;
