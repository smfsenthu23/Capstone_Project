import {Routes, Route, Navigate} from "react-router-dom"

import Home from "../pages/Home/Home.js"
import Characters from "../pages/Characters/Characters.js"
import Houses from "../pages/Houses/Houses.js"
import Character from "../pages/Character/Character.js"


function AppRoute ()
{
  return (
    <Routes>
      <Route
         path="/"
         element={<Home />}
  />
     <Route
         path="/characters/:page"
         element={<Characters />}
     /> 
     <Route
         path="/character"
         element={<Character />}
     />
      <Route
         path="/houses/:page"
         element={<Houses /> }
      />
    {/*  <Route
         path="*"
         element={<Navigate to={"/"} />}
      /> */}
    </Routes> 
  );
}

export default AppRoute;
