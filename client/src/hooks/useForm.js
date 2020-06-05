// write your custom hook here to control your checkout form
// import { useLocalStorage } from './useLocalStorage';


// export const useForm = (key) => {
//     const [values, setValues] = useLocalStorage(key); 

//     const handleChanges = (e) => {
//         setValues({ ...values, [e.target.name]: e.target.value });
//       };
    
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setValues(true);
//       };
    

//     return [values, setValues, handleChanges, handleSubmit];
// }
import React, {useState} from 'react'
export const useForm = (key) => {
    const [values, setValues] = useState(key); 

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };


    return [values, setValues, handleChanges];
}
