import { useState, useEffect } from "react";

const useFetch = (URL) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch(URL)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setProducts(result.products);
        });
    }, [URL]);

    return [products]

}

export default useFetch;