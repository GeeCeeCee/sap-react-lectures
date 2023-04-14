import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./list.css";
interface ProductType {
  id: string;
  title: string;
  description: string;
  price: string;
  discountPercentage: string;
  rating: string;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export interface ProductResponse {
  limit: number;
  products: Array<ProductType>;
  skip: number;
  total: number;
}

const url = "https://dummyjson.com/products";

interface ListProps {
    count: number;
    getProducts: () => Array<ProductType>
}

const List: React.FC<ListProps> = ({count, getProducts}) => {
  const [productList, setProductList] = useState<Array<ProductType>>([]);

  React.useEffect(() => {
    // axios.get(url).then((response: AxiosResponse<ProductResponse>) => {
    //   setProductList(response.data.products);
    // });

    setProductList(getProducts)
  }, []);

  return (
    <ul className="ul-root">
      {productList.map((product: ProductType, index: number) => (
        index < count && <li key={product.id} style={{ maxWidth: "200px", padding: "20px" }}>
          {product.title}
        </li>
      ))}
    </ul>
  );
};

export default List;
