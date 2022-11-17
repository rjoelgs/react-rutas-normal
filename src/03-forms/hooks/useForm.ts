import { useState } from "react";

interface ObjetoSuscriber{
    name: string;
    email: string;
    password1: string;
    password2: string;
}


export const useForm = (initialState: ObjetoSuscriber)=>{
    const [objSuscriber, setObjSuscriber] = useState<ObjetoSuscriber>(initialState);
    
      function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
        setObjSuscriber({ ...objSuscriber, [ev.target.name]: ev.target.value });
      }

      function resetForm(){
        setObjSuscriber({...initialState})
      }
    
      function handleSubmit (ev: React.FormEvent<HTMLFormElement>){
        ev.preventDefault();
    
        console.log(objSuscriber)
      }

      const isValidEmail = ( email: string ) => {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      }
      

    return{
        handleChange, handleSubmit, objSuscriber, resetForm, isValidEmail
    }
}