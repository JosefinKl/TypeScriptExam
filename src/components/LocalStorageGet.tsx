import { useState, useEffect } from 'react';
import CheckboxList from './CheckboxList';


const LocalStorageGet = () => {
    const [storageData, setStorageData] = useState<Array<object> | null>([]);
  
    useEffect(() => {
      if (localStorage.getItem('todos')) {
        const storedData = JSON.parse(localStorage.getItem('todos') as string);
        setStorageData(storedData);
        
      }
    }, []);

    useEffect(() => {
        console.log(storageData);
      }, [storageData]);

      

    return (
        <>
            <div>
              <CheckboxList storageData={storageData}  ></CheckboxList>
               <p> vi kör detta </p>
            
            </div>

        </>
    )
}

export default LocalStorageGet;