import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { db } from "@/lib/db";

export default async function Product() {
  const products = await db.product.findMany({});
  return (
    <div className="grid grid-cols-4 gap-y-16 gap-x-4">
      {products.map((product) => (
        <div key={product.id} className="flex flex-row items-center">
          <div className="flex flex-col space-y-2">
            <div className="bg-white border w-[300px] h-[350px] flex items-center justify-center">
              Image
            </div>
            <div className="space-y-2">
              <div className="flex justify-between font-medium">
                <span>{product.title}</span>
                <span>${product.price}</span>
              </div>
              <p className="text-xs">{product.variant}</p>
              <Button className="w-full" variant={"outline"}>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
