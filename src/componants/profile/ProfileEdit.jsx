import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import toast from "react-hot-toast";
import { useState } from "react";

const ProfileEdit = ({ user }) => {
  const [image, setImage] = useState(null);
  console.log(image);
const handleUpdateProfile = async (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(e.target));

  const data = await authClient.updateUser({
    name: formData.name,
    phone: formData.phone,
    location: formData.location,
    image:image, 
  });

  if (data) toast.success("updated profile!");
  console.log(data)
};

  return (
    <div>
      <Modal>
        <Button className="flex-1 btn btn-primary py-2  font-bold text-lg rounded-lg transition">
          Edit Profile
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text-center text-lg ">
                  Profile Update
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6 mt-6">
                <Surface>
                  <form
                    onSubmit={handleUpdateProfile}
                    className="flex flex-col gap-4"
                  >
                    <TextField
                      
                      className="w-full"
                      type="text"
                      variant="secondary"
                      defaultValue={user?.name}
                    >
                      <Label>Name</Label>
                      <Input name="name" placeholder="Enter your name" />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="image"
                      variant="secondary"
                    >
                      <Label>Image</Label>
                      <Input
                         name="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        placeholder="Enter your Image"
                      />
                    </TextField>
                    <TextField
                      className="w-full"
                     
                      type="tel"
                      variant="secondary"
                      defaultValue={user?.phone}
                    >
                      <Label>Phone</Label>
                      <Input  name="phone" placeholder="Enter your phone number" />
                    </TextField>
                    <TextField
                      className="w-full"
                     
                      variant="secondary"
                      placeholder="Enter your location"
                      defaultValue={user?.location}
                    >
                      <Label>Location</Label>
                      <Input  name="location" type="text" />
                    </TextField>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit">Update Profile</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileEdit;
