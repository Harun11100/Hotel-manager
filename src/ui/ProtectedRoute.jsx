import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner"

import { useEffect } from "react"


const FullPage=styled.div`
height: 100vh;
background-color: var(--color-grey-50);
display: flex;
align-items: center;
justify-content: center;

`;

function ProtectedRoute({children}) {
     

      const navigate=useNavigate();  

      // 1. Load the authenticated User
       const {isAuthenticated,isLoading}=useUser();



      //2. If there is No Authenticated user , redirect  to the log in page
       useEffect(function(){
       if(!isAuthenticated && isLoading) navigate('/login');
       },[isAuthenticated,isLoading,navigate]
      );
       
      // 3.While Loading ,show a spinner
      if(isLoading)return(<FullPage><Spinner/></FullPage>);

      // 4 .If there is a user , render the app

      if(isAuthenticated)return children;
}

export default ProtectedRoute;