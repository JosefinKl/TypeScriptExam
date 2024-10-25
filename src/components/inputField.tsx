import { useState, useEffect } from 'react';
import CheckboxList from './CheckboxList';

const InputField = () => {
   const [inputValue, setInputValue] = useState('');


   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

const [numberOfClicks, setNumberOfClicks] = useState(0);
const [addToDo, setaddToDo] = useState('');

  const handleButtonClick = () => {
    setaddToDo(inputValue)
    console.log(inputValue); // text from input
    setInputValue(''); // Empty input 
    setNumberOfClicks(numberOfClicks + 1); //Update number of clicks
    console.log(numberOfClicks)
  };

    return (
        <>
            <div>
                
                <CheckboxList addToDo={addToDo} numberOfClicks={numberOfClicks} ></CheckboxList>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                
                <button onClick={handleButtonClick}> + </button>      
            
            </div>

        </>
    )
}



export default InputField