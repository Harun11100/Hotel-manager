import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { eachDayOfInterval, format, isSameDay } from "date-fns";
import { subDays } from "date-fns/subDays";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;




    function SalesChart({bookings,numDays}) {
      const isDarkMode = true;
       const allDates =eachDayOfInterval({
         start:subDays(new Date(),numDays-1),
         end:new Date()
      })

      const  data =allDates.map((date)=>{

        return{
              label: format(date,'MMM dd'),
              totalSales: bookings.filter(booking=>
                isSameDay(date,new Date(booking.created_at))
              ).reduce((acc,cur)=>acc+cur.totalPrice,0),

              extrasSales: bookings.filter(booking=>
                isSameDay(date,new Date(booking.created_at))
              ).reduce((acc,cur)=>acc+cur.extrasPrice,0)
        
            }
        
      })
      console.log(data)


      const colors = isDarkMode
        ? {
            totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
            extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
            text: "#e5e7eb",
            background: "#18212f",
          }
        : {
            totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
            extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
            text: "#374151",
            background: "#fff",
          };
      

      return (
        <StyledSalesChart>

          <Heading as='h2'> sales</Heading>
          <ResponsiveContainer>

         
          <AreaChart data={data}  height={300} width='100%'>
           <XAxis dataKey='label'/>
           <YAxis unit="$"/>
           <CartesianGrid strokeDasharray='4'/>
           <Tooltip/>
           
            <Area dataKey='totalSales' type='monotone'
            stroke={colors.totalSales.stroke} strokeWidth={2} fill={colors.totalSales.fill}/>
            
            <Area dataKey='extrasSales' type='monotone'
            stroke={colors.totalSales.stroke} strokeWidth={2} fill={colors.totalSales.fill}/>
          
          </AreaChart>
          </ResponsiveContainer>
        </StyledSalesChart>
      )
    }
    
    export default SalesChart
    