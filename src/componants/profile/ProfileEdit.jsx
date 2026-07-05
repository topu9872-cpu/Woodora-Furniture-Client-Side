"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const ProfileEdit = ({ user }) => {
  const [form, setForm] = useState(() => ({
    name: user?.name || "",
    phone: user?.phone || "",
    location: user?.location || "",
  }));

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;

    const timer = window.setTimeout(() => {
      setForm({
        name: user.name || "",
        phone: user.phone || "",
        location: user.location || "",
      });
      setImageFile(null);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [user]);

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error?.message || "Image upload failed");
    }

    return data.data.display_url;
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let imageUrl = user.image;

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      await authClient.updateUser({
        name: form.name,
        phone: form.phone,
        location: form.location,
        image: imageUrl,
      });

      toast.success("Profile updated!");
      window.setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (err) {
      toast.error(err.message || "Update failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button className="btn btn-primary font-bold">Edit Profile</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading className="text-center">
                Update Profile
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <Surface>
                <form
                  onSubmit={handleUpdateProfile}
                  className="flex flex-col gap-4"
                >
                  <TextField>
                    <Label>Name</Label>
                    <Input
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </TextField>

                  <TextField>
                    <Label>Phone</Label>
                    <Input
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                    />
                  </TextField>

                  <TextField>
                    <Label>Location</Label>
                    <Input
                      value={form.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                    />
                  </TextField>

                  <TextField>
                    <Label>Image</Label>
                    <input
                      className="border border-gray-300 rounded p-2.5 w-xs"
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];

                        if (file instanceof File) {
                          setImageFile(file);
                        }
                      }}
                    />
                  </TextField>

                  <Button type="submit" disabled={loading}>
                    {loading ? "Updating..." : "Update Profile"}
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ProfileEdit;
