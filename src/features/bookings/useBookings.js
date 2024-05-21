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
     const sortByRaw= searchParams.get('sortBy')||'startDate-desc';
     
     const [field,direction]=sortByRaw.split('-');

     const sortBy={field,direction}
      
      const{
            isLoading,
            data:bookings,
          } =useQuery({
          queryKey:['bookings',filter,sortBy],
          queryFn :()=>getBookings({filter,sortBy})
         });

        return{isLoading,bookings}
    } 
    
