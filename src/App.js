import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup } from "./Pages";

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/profile" element={<ProfileCard/>}/> */}


      
    </Routes>
    </>
  );
}

export default App;
