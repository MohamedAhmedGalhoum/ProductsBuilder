import productImg from "../assets/c-d-x-PDX_a_82obo-unsplash.jpg";
import Image from "./Image";
import Button from "./UI/Button";

interface IProps {}

const ProductCard = ({}: IProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white">
      {/* Image */}
      <div className="relative">
        <Image imageURL={productImg} alt="Product" ClassName="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
          New
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Wireless Headset</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          High quality wireless headset with noise cancellation and long battery
          life.
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-green-600 font-bold text-lg">$99.99</span>
          <span className="text-sm text-gray-400 line-through">$129.99</span>
        </div>

        {/* Colors */}
        <div className="flex items-center space-x-2 mt-3">
          <span className="w-5 h-5 bg-yellow-300 rounded-full cursor-pointer border"></span>
          <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer border"></span>
          <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer border"></span>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2 mt-4">
          <Button ClassName="bg-blue-500 hover:bg-blue-700 w-full" onClick = {() => alert("Added to Cart")}>
            Add to Cart
          </Button>
          <Button ClassName="bg-lime-500 hover:bg-lime-700 w-full" onClick = {() => alert("Edit Product")}>
            Edit
          </Button >
          <Button ClassName="bg-red-500 hover:bg-red-700 w-full" onClick = {() => alert("Delete Product")}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;