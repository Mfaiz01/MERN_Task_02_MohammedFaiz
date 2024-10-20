import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormComponent from './FormComponent'; // Adjust the import based on your file structure

function App() {
  return (
    <div>
        <FormComponent />
      <ToastContainer />
    </div>
  );
}

export default App;
