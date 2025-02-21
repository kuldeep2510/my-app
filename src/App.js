import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [mode, setmode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
   setTimeout(()=>{
    setAlert(null);
   } ,3000);
  

  const toggleMode = ()=>{
    if( mode ==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='navy'
      showAlert("Dark mode has been enabled","success")
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='';
      showAlert("Light mode has been enabled","success")
    }
  }

  return (

     

       <>
       <Navbar
          title="Shreya"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}></div>
        <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
       
       
       </>

  );
      


  //       return (
  //   <>
  //     <BrowserRouter>
  //       <Navbar
  //         title="Kuldeep"
  //         aboutText="About Us"
  //         mode={mode}
  //         toggleMode={toggleMode}
  //       />

  //       <Alert alert={alert} />
  //       <div className="container my-3" mode={mode}>
  //         <Routes>
  //           <Route path="/about" element={<About />} />
  //         </Routes>
  //         <Routes>
  //           <Route
  //             path="/"
  //             element={
  //               <TextForm
  //                 showAlert={showAlert}
  //                 heading="Enter the text to analyze below"
  //                 mode={mode}
  //               />
  //             }
  //           />
  //         </Routes>
  //       </div>
  //     </BrowserRouter>
  //   </>
  // );
    
   
   
}

export default App;
