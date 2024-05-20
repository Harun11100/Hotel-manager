import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers"; 
import { useDeleteCabin } from "./useDeleteCabin";
import { HiSquare2Stack } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;


function CabinRow({cabin}) {
  
  const {isDeleting,deleteCabin}=useDeleteCabin()
  const {isCreating,createCabin}=useCreateCabin()
  
  const {id:cabinID,name,maxCapacity,regularPrice,discount,image
  }=cabin;


  function handleDuplicate(){
    createCabin({
      name:`copy of ${name}`,maxCapacity,regularPrice,discount,image 
    });

  }
 

  
 

  // const queryClient=useQueryClient()
  // const{isLoading:isDeleting,mutate}=useMutation({
  //   mutationFn:deleteCabin,
  //   onSuccess:()=>{toast.success('Cabin is successfully deleted')
    
  //   queryClient.invalidateQueries({queryKey:['cabins']})},

  //   onError:(err)=>toast.error(err.message)
  // })
 

  return (
  <>
   <Table.Row>
    <Img src={image}/>
    <Cabin>{name}</Cabin>
    <div>Fits up to {maxCapacity} guests</div>
    <Price>{formatCurrency(regularPrice)}</Price>
    {discount? <Discount >{formatCurrency(discount)}</Discount>:
    <span>&mdash; &mdash;</span> }
   <div>
      {/* <button disabled={isCreating} 
       onClick={()=>handleDuplicate()}>
      <HiSquare2Stack/>
       </button> */}
      <Modal>
      <Modal.Open opens='delete'>
      <button disabled={isDeleting}><HiTrash/></button>
      </Modal.Open>
      <Modal.Window name='delete'>
        <ConfirmDelete
        resourceName='cabins' 
        disabled={isDeleting} 
        onConfirm={()=>deleteCabin(cabinID)} />
      </Modal.Window>
   
     </Modal>
      <Menus.Menu>
         <Menus.Toggle id={cabinID}/>
         <Menus.List id={cabinID}>
          <Menus.Button icon={<HiSquare2Stack/>}
          onClick={()=>handleDuplicate()}
          >Duplicate</Menus.Button>
          <Menus.Button icon={<HiTrash/>}>Delete</Menus.Button>
         </Menus.List>
      </Menus.Menu>
   </div>
   </Table.Row>

   
   </>
  )
}

export default CabinRow
