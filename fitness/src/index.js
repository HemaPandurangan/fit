



import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Login from './components/Login';
import Register from './components/Register';
import reportWebVitals from './reportWebVitals';
import App from './App';

import ActivityForm from './components/ActivityForm'
import Popup from './components/Popup';
import PopupSetGoal from './components/Popupsetgoal';
import ProgressForm from './components/ProgressForm';
import DataForm from './components/dataForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />} />
      
        
        <Route path="/register" element={<Register />} />
        <Route path="/data" element={<DataForm />} />
          <Route path="/activity" element={<ActivityForm />} />
          <Route path="/progress" element={<ProgressForm />} />
        <Route path="/set-Profile" element={<Popup />} />
        <Route path="/set-goal" element={<PopupSetGoal />} /> 
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();












// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Correct import for React 18
// import './index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
// import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
// import reportWebVitals from './reportWebVitals';
// import App from './App';
// // import Parent from './components/Parent'; // Ensure this includes the popups
// import Popup from './components/Popup';
// import PopupSetGoal from './components/Popupsetgoal';
// import ActivityForm from './components/ActivityForm';
// // Create the root element using ReactDOM.createRoot
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<App />} />
//         <Route path="/register" element={<Register />} />
//           {/* <Route path="/parent" element={<Parent />} />  */}
//        <Route path="/activity-form" element={<ActivityForm />} />
//         <Route path="/set-Profile" element={<Popup />} />
//         <Route path="/set-goal" element={<PopupSetGoal />} /> 
//         {/* <Parent/> */}
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();
