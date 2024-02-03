import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom";
const ProductDetails = () => {
  const [products] = useFetch("https://dummyjson.com/products");
  const { id } = useParams();
  const productDetails = products.filter((item) => item.id === parseInt(id));

  return (
    <div className="products bg-dark row">
       <Link to="/products">
          <button  style={{float:"left"}} type="button" class="btn btn-outline-light me-2">Back</button>
          </Link>
      {productDetails
        ? productDetails.map((item) => {
            return (
              <div class="product-details text-white">
                <img
                  class="product-details"
                  src={item.thumbnail}
                  alt="product-details"
                />
                <div class="product-details-body">
                  <h5 class="product-details-title">{item.title}</h5>
                  <p class="product-details-text">{item.description}</p>
                </div>
                <div class="product-details-body">
                  <p class="product-details-text">{item.discountPercentage}</p>
                </div>

                <div class="product-details-body">
                  <h5 class="product-details-title">{item.price}</h5>
                  <h5 class="product-details-title">{item.price}</h5>

                  <h5 class="product-details-title">{item.discountPercentage}</h5>
                  <h5 class="product-details-title">{item.rating}</h5>
                  <h5 class="product-details-title">{item.stock}</h5>
                </div>

              </div>
            );
          })
        : null}
    </div>
  );
};

export default ProductDetails;
