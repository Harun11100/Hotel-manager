import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {booking,isLoading}=useBooking()
  // const status = "checked-in";
  const {checkout,isCheckingOut}=useCheckout()
  const moveBack = useMoveBack();
  const navigate=useNavigate();
  const {isDeleting,deleteBooking}=useDeleteBooking()

  if(isLoading)return <Spinner/>

   const {status,id:bookingId}=booking;


  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1" >Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status==='unconfirmed'&&
        <Button  onClick={()=>navigate(`/checkin/${bookingId}`)}>
          Check in
        </Button>}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
        {status==='checked-in'&&
           <Button icon={<HiArrowUpOnSquare/>}
            onClick={()=>checkout(bookingId)}
            disabled={isCheckingOut}
           >Check out</Button>}

           {status==='checked-out'&&
           <Button icon={<HiTrash/>} 
           onClick={()=>deleteBooking(bookingId)}
            disabled={isDeleting} >Delete</Button>}


           <Modal>
           <Modal.Open opens="delete">
           <Button icon={<HiTrash/>} >Delete</Button>
           </Modal.Open>
           <Modal.Window name='delete'>
             <ConfirmDelete resourceName='booking'
             onConfirm={()=>deleteBooking(bookingId)}/>
            </Modal.Window>
           </Modal>

      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
