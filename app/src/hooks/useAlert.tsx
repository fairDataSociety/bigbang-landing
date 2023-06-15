import {useState} from 'react';

const useAlert = () => {
    const alertHidden = localStorage.getItem('alertHidden') === 'true'
    const [showAlert, setShowAlert] = useState(!alertHidden);

    const hideAlert = ():void =>{
        localStorage.setItem('alertHidden', 'true');
        setShowAlert(false);
    }

    return { showAlert, hideAlert };
}

export default  useAlert
