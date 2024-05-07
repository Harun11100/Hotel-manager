import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import styled from "styled-components"

const Main=styled.main`
background-color:var(--color-grey-0);
padding: 4rem 4.8rem 6.4rem;


`
const StyledApplayout=styled.div`

 display: grid;
 grid-template-columns: 26rem 1fr ;
 grid-template-rows: auto 1fr;
 height:100vh;
 

`



function Applayout() {
      return (
            <StyledApplayout>
                 
                  <Header/>
                  <Sidebar/>
                <Main>
                   <Outlet/>
                </Main>
                 
            </StyledApplayout>
      )
}

export default Applayout
