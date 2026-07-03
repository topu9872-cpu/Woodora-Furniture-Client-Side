import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { getCartDelete } from "../../../public/ServerData/ServerData";

const DeleteCart = ({ c, setCart }) => {
  const handleDelete = async (id) => {
    const deleteCart = await getCartDelete(id);

    toast.success(`${c.name} is deleted !`);
    setCart((prv) => prv.filter((item) => item._id !== id));
  };

  return (
    <div>
      <AlertDialog>
        <Button className="btn bg-red-500 hover:bg-red-600 text-white border-none rounded-xl">
          Remove
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete project permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>My Awesome Project</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={() => handleDelete(c._id)}
                  slot="close"
                  variant="danger"
                >
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteCart;
