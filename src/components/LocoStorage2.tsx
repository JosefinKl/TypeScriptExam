
import { useState, useEffect } from 'react';

const LocalStorage = () => {
    const [storageData, setStorageData] = useState<Array<object> | null>([]);
  
    useEffect(() => {
      if (localStorage.getItem('todos')) {
        const storedData = JSON.parse(localStorage.getItem('todos') as string);
        setStorageData(storedData);
    setItems(items => [...items, ...storedData]);
      }
    }, []);

    return (
    
    )

}
export <LocalStorage2></LocalStorage2>