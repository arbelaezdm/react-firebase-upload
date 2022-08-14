import React from 'react'
import { uploadFile } from './firebase/config'
import { useState } from "react";

const App = () => {

  const [file, setfile] = useState(null) 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //throw new Error ('Fallo al subir') => Linea para probar error
      const result = await uploadFile(file);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name='' onChange={e => setfile(e.target.files[0])} />
      <button>Upload</button>
    </form>
  )
}
export default App
