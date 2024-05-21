import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

    export default function useBookings(){
      const [searchParams]=useSearchParams()
     
     //filter
     const filterValue=searchParams.get('status')
     const filter =!filterValue || filterValue==='all'? null:
     {field:'status',value:filterValue}

     // sort
   
      const{
            isLoading,
            data:bookings,
          } =useQuery({
          queryKey:['bookings',filter],
          queryFn :()=>getBookings({filter})
         });

        return{isLoading,bookings}
    } 
    
