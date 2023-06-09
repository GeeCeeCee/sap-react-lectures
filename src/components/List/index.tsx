import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

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

interface ProductResponse {
  limit: number;
  products: Array<ProductType>;
  skip: number;
  total: number;
}

const url = "https://dummyjson.com/products";

const List: React.FC = () => {
  const [productList, setProductList] = useState<Array<ProductType>>([]);

  React.useEffect(() => {
    axios.get(url).then((response: AxiosResponse<ProductResponse>) => {
      setProductList(response.data.products);
    });
  }, []);

  return (
    <ul>
      {productList.map((product: ProductType) => (
        <li key={product.id} style={{ maxWidth: "200px", padding: "20px" }}>
          {product.title}
        </li>
      ))}
    </ul>
  );
};

export default List;
