import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav"
import Heading from "./Heading";
// import Uploader from "../data/Uploader"
const StyledSidebar=styled.aside`
 background-color:var(--color-grey-0);
 padding: 3.5rem 2.5rem;
 border-right: 1px solid var(--color-grey-100);
 grid-row: 1 / -1;
 display: flex;
 flex-direction: column;
 gap: 3.2rem;


`

function Sidebar() {
      return (
            <StyledSidebar>
                <Logo/>
                   <Heading><h3>SuietLife</h3></Heading>

                <MainNav/>
            </StyledSidebar>
      )
}

export default Sidebar;
