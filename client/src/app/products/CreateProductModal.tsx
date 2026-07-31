import { ChangeEvent, SubmitEvent, useState } from "react";
import { v4 } from "uuid";
import Header from "../(components)/Header";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type createProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formdata: ProductFormData) => void;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: createProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-600/60  overflow-y-auto h-full w-full  z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Create New Product" />
        <form onSubmit={handleSubmit} className="mt-5">
          {/* Product name */}
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full mb-2 p-2 border-gray-500 border-2 rounded-md"
            required
          />
          {/* Price */}
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Product Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="block  w-full mb-2 p-2 border-gray-500 border-2 rounded-md"
            required
          />
          {/* Strock quantity  */}
          <label
            htmlFor="stockQuantity"
            className="block text-sm font-medium text-gray-700"
          >
            Product Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={formData.stockQuantity}
            onChange={handleChange}
            className="block  w-full mb-2 p-2 border-gray-500 border-2 rounded-md"
            required
          />

          {/* Rating */}
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Product Rating
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Product Rating"
            value={formData.rating}
            onChange={handleChange}
            className="block  w-full mb-2 p-2 border-gray-500 border-2 rounded-md"
            required
          />

          <button
            type="submit"
            className="mt-4 px-4 py-2  bg-blue-500 text-white text-base font-medium rounded hover:bg-blue-700 "
          >
            Create
          </button>
          <button
            className=" ml-2 px-4 py-2 bg-gray-500 text-white text-base font-medium rounded hover:bg-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
