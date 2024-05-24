import { HiOutlineBriefcase } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // Calculate the number of bookings
  const numBookings = bookings.length;

  // Calculate the total sales
  const sales = bookings.reduce((acc, cur) => acc + (cur.totalPrice || 0), 0);

  // Calculate the number of check-ins
  const checkins = confirmedStays.length;

  // Calculate the total number of nights stayed
  const totalNights = confirmedStays.reduce((acc, cur) => acc + (cur.numNights || 0), 0);

  // Calculate the occupancy rate
  const occupation = (totalNights / (numDays * cabinCount)) * 100;

  return (
    <>
      <Stat title="Bookings" color="red" value={numBookings} icon={<HiOutlineBriefcase />} />
      <Stat title="Sales" color="blue" value={sales} icon={<HiOutlineBanknotes />} />
      <Stat title="Checkins" color="yellow" value={checkins} icon={<HiOutlineCalendarDays />} />
      <Stat title="Occupancy rate" color="indigo" value={Math.round(occupation) + "%"} icon={<HiOutlineChartBar />} />
    </>
  );
}

export default Stats;
