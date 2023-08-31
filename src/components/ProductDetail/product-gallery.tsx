"use client";
import { Tab } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

interface galleryProps {
  images: string[];
}

const ProductGallery: React.FC<galleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className={"flex flex-col"}>
      <Tab.Panels className={"aspect-square w-full"}>
        {images?.map((image, index) => {
          return (
            <Tab.Panel key={index}>
              <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                <Image
                  src={image}
                  fill
                  alt="product"
                  className="object-cover object-center"
                />
              </div>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
      <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className={"grid grid-cols-4 gap-6"}>
          {images?.map((image) => {
            return <GalleryTab key={image} image={image} />;
          })}
        </Tab.List>
      </div>
    </Tab.Group>
  );
};

export default ProductGallery;
