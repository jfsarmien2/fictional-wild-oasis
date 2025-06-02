import { HiOutlineBriefcase } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1.
  const num_bookings = bookings?.length;

  //2.
  const sales = bookings?.reduce(
    (initialValue, currentValue) => initialValue + currentValue?.total_price,
    0
  );

  //3.
  const checkins = confirmedStays?.length;

  //4.
  const occupation =
    confirmedStays?.reduce(
      (initialValue, currentValue) =>
        initialValue + currentValue?.num_of_nights,
      0
    ) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title={"Bookings"}
        value={num_bookings}
        color={"blue"}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title={"Sales"}
        value={formatCurrency(sales)}
        color={"green"}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title={"Check ins"}
        value={checkins}
        color={"indigo"}
      />
      <Stat
        icon={<HiOutlineBriefcase />}
        title={"Occupancy rate"}
        value={Math.round(occupation * 100) + "%"}
        color={"yellow"}
      />
    </>
  );
}

export default Stats;
