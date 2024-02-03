/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import {Link} from "react-router-dom"
import useFetch from "../../hooks/useFetch";

const Products = () => {

  const [products] = useFetch("https://dummyjson.com/products");
  return (
    <div className="products bg-dark row">
      {
        products ? 
      products.map((item) => {
          return (
            <div class="product-block col-md-4">
              <Link to={`/product/${item.id}`}>
              <img class="product-image" src={item.thumbnail} alt="product-block image cap" />
              </Link>
            <div class="product-block-body">
              <h5 class="product-block-title">{item.title}</h5>
              <p class="product-block-text">{item.description}</p>
            </div>
            <div class="product-block-body">
              <p class="product-block-text">{item.discountPercentage}</p>
            </div>
          </div>
          
          )
        }): null

      }
     
    </div>
  );
};

export default Products;
