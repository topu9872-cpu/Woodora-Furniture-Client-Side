import toast from "react-hot-toast";
import { getEditProduct } from "../../../public/ServerData/ServerData";

const AdminEditProduct = ({ product }) => {
  const handleProductEdit = async (e) => {
    e.preventDefault();

    try {
      const formData = Object.fromEntries(new FormData(e.target));

      const data = {
        name: formData.name,
        price: formData.price,
        rating: formData.rating,
        material: formData.material,
        category: formData.category,
        description: formData.description,
        image: formData.image,
      };

      const editFunction = await getEditProduct(product._id, data);

      if (editFunction) {
        setTimeout(() => {
          toast.success("Product updated successfully!", {
            position: "top-right",
          });
        }, 1000);

        document.getElementById(`edit_${product._id}`).close();
      } else {
        toast.error("Failed to update product.");
      }
    } catch (err) {
      toast.error(err.message || "Failed to update product.");
    }
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          document.getElementById(`edit_${product._id}`).showModal()
        }
      >
        Edit
      </button>

      <dialog id={`edit_${product._id}`} className="modal">
        <div className="modal-box max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Edit Product</h2>

          <form
            onSubmit={handleProductEdit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Product Name</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={product.name}
                className="input input-bordered w-full"
              />
            </div>

            {/* Price */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Price</span>
              </label>
              <input
                name="price"
                type="number"
                defaultValue={product.price}
                className="input input-bordered w-full"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <input
                name="rating"
                type="number"
                defaultValue={product.rating}
                className="input input-bordered w-full"
              />
            </div>

            {/* Image */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Image URL</span>
              </label>
              <input
                name="image"
                type="text"
                defaultValue={product.image}
                className="input input-bordered w-full"
              />
            </div>

            {/* Category */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <input
                name="category"
                type="text"
                defaultValue={product.category}
                className="input input-bordered w-full"
              />
            </div>

            {/* Material */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">Material</span>
              </label>
              <input
                name="material"
                type="text"
                defaultValue={product.material}
                className="input input-bordered w-full"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="label">
                <span className="label-text font-semibold">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={product.description}
                className="textarea textarea-bordered w-full h-32"
              />
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end gap-3 mt-4">
              <button
                onClick={() =>
                  document.getElementById(`edit_${product._id}`).close()
                }
                type="button"
                className="btn btn-outline"
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AdminEditProduct;
