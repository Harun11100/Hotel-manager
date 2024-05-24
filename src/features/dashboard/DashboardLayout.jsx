import styled from "styled-components";
import { useRecentBookings } from "./useRecentBooikngs";
import Spinner from "../../ui/Spinner";
import { useRecentStay } from "./useRecentStay";
import Stats from "./Stats";
import { useCabin } from "../cabins/useCabin";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {

  const {bookings,isLoading:isLoading0}=useRecentBookings()
  
  const {stays,confirmedStays,isLoading:isLoading1,numDays}=useRecentStay()
  const {cabins,isLoading:isLoading2}=useCabin();
  
  if(isLoading0||isLoading1||isLoading2)return <Spinner/>

  return (
        <StyledDashboardLayout>
         <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length}/>
 
        </StyledDashboardLayout>
  )
}

export default DashboardLayout
