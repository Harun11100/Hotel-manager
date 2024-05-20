
// import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabin } from "./useCabin";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
 
  const {isLoading,cabins}=useCabin();
  const [searchParams]=useSearchParams();
  if(isLoading)
    return<Spinner/>;
  ////////////Filter/////////////
  const filterValue=searchParams.get('discount')||'all'
  
  let filteredCabin;
  if(filterValue==='all')filteredCabin=cabins
  if(filterValue==='no-discount')filteredCabin=cabins.
  filter(
    cabin=>cabin.discount===0
  ) 
  if(filterValue==='with-discount')filteredCabin=cabins.
  filter(
    cabin=>cabin.discount>0
  )

  ////////////Sorting/////////////

  const sortBy =searchParams.get('sortBy')||'startDate-asc';
  const [field,direction]=sortBy.split('-');
  const modifier=direction==='asc'?1:-1
  const sortedCabins= filteredCabin.sort((a,b)=>(a[field]-b[field])*modifier)
  
  return (
    <Menus>
   <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr" >
    <Table.Header role="row">
      
     
      <div></div>
      <div>Cabin</div>  
      <div>Capacity</div>
      <div>Price</div> 
      <div>Discount</div>
      <div></div>
     
     
    </Table.Header> 
    <Table.Body  
    data={sortedCabins}
    // data={filteredCabin} 
    render={cabin=><CabinRow cabin={cabin} key={cabin.id}/>}/>
   
   </Table>
   </Menus>
  )
}



export default  CabinTable; 
