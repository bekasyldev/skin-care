import Product from "./Product";
import { Button } from "./ui/button";
import { productData } from "@/constants/data";

const ProductList = () => {
  return (
    <section className="h-[1500px] px-20 py-24 bg-[#C7E5D6]">
      <div className="flex flex-col space-y-4 mb-16">
        <span className="font-semibold">Discover</span>
        <h3 className="text-4xl font-bold">Featured</h3>
        <div className="flex justify-between">
          <p>Explore our wide range of high-quality skincare products.</p>
          <Button size={"lg"} variant={"outline"}>
            View all
          </Button>
        </div>
      </div>
      <Product />
    </section>
  );
};

export default ProductList;
