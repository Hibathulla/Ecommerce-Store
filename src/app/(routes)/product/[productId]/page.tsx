import ProductList from "@/components/Home/ProductList";
import ProductGallery from "@/components/ProductDetail/product-gallery";
import ProductInfo from "@/components/ProductDetail/product-info";

interface ProductDetailPageProps {
  params: {
    productId: string;
  };
}

// const images = [
//   "/red-t-shirt.jpg",
//   "/green-t-shirt.jpg",
//   "/blue-t-shirt.jpg",
//   "/black-shirt.jpg",
// ];

const getProducts = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product/${id}`,
    {
      cache: "no-store",
    }
  );

  return (await res).json();
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = async ({
  params,
}) => {
  const { data: productData } = await getProducts(params?.productId);
  console.log(productData, "data");

  const images = productData?.product?.images?.map((image: string) => {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/img/products/${image}`;
  });
  return (
    <div className="bg-white mx-auto">
      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-14">
          <ProductGallery images={images} />
          <ProductInfo product={productData?.product} />
        </div>
      </div>
      <hr className="my-10" />
      {/* <ProductList title="Related products" /> */}
    </div>
  );
};

export default ProductDetailPage;
