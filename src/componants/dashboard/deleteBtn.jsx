import {AlertDialog, Button} from "@heroui/react";
import { getDeleteProducts } from "../../../public/ServerData/ServerData";
import toast from "react-hot-toast";


const DeleteBtn = ({product}) => {

    const handleDelete=async(id)=>{
    const deleteCard=await getDeleteProducts(id);
     if (deleteCard.deletedCount > 0) {
    toast.success("Product Deleted Successfully");

  }
}


  return (
    <div>
      <AlertDialog>
      <Button className="btn btn-error text-white">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete product permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{product.name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=>handleDelete(product._id)} variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    </div>
  );
};

export default DeleteBtn;