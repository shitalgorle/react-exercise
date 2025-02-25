
import React from "react";
import "./Amazon.css";

const ProductArray = ({ addToCart }) => {
  const products = [
    {id: 1,name: "Motherboard", price: "₹19,385.", image: "https://m.media-amazon.com/images/I/71zMsBQQrwL._AC_UF1000,1000_QL80_.jpg" },
    {id: 2,name: "Hard Drive", price: "₹7199.", image: "https://m.media-amazon.com/images/I/81u47A2BChL._AC_UY218_.jpg" },
    {id: 3,name: "32GB Memory RAM", price: "₹77,240.", image: "https://m.media-amazon.com/images/I/71Vi+ubUMvL._SX679_.jpg" },
    {id: 4,name: "Control unit",price: " ₹1,299",image: "https://m.media-amazon.com/images/I/51DngImstjL._SX300_SY300_QL70_FMwebp_.jpg", },
    {id: 5,name: "Registers",price: "₹7,499.",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHBiderqYEibjJClmM_Nx-dgNtNaPZRgs9Q&s",},
    {id: 6,name: "Power supply",price: "₹1,999",image: "https://m.media-amazon.com/images/I/81QiEmmEbWL._AC_UY218_.jpg",},
    {id: 7,name: "Cooling Fan",price: "₹315.",image: "https://m.media-amazon.com/images/I/51Nhy4Nrn9L._SY445_SX342_QL70_FMwebp_.jpg",},
    {id: 8,name: "Buses",price: "₹3,450.",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2SFaKHTmNz9IYZqZyl6nj6DG_fEMYyFPSQ&s",},
    {id: 9,name: "Monitor",price: "₹7,600.",image: "https://m.media-amazon.com/images/I/71IZVnU5iXL._AC_UY218_.jpg",},
    {id: 10,name: "Video card",price: "₹1,499.",image: "https://m.media-amazon.com/images/I/81LkkH2bYNL._AC_UY218_.jpg",},
    {id: 11,name: "Cache",price: "₹1,999",image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/12/cpu-cache.jpg",},
    {id: 12,name: "ALU",price: "₹14,000.",image: "https://arith-matic.com/gfx/products/s1-au-mk1.jpg",},
    {id: 13,name: "EVM 128GB 2.5-Inch SATA Internal SSD",price: "₹738.",image: "https://m.media-amazon.com/images/I/51kFkoevLgL._SX679_.jpg",},
    {id: 14,name: "Processor 8 cores",price: " ₹12,919",image: "https://m.media-amazon.com/images/I/41mG-9GZkCL._SY300_SX300_QL70_FMwebp_.jpg",},
    {id: 15,name: "Intel Core I9-14900K Gaming Desktop Processor",price: "₹45,329.",image: "https://m.media-amazon.com/images/I/61a+cNGLTvL._AC_UY218_.jpg",},
  ];

  return (
    <div className="container">
      <h1>CPU Parts:</h1>
      <div className="main-one">
        {products.map((product) => (
          <div key={product.id} className="product-container">
            <img src={product.image} alt={product.name} style={{ width: "150px", height: "150px" }} />
            <p>{product.name}</p>
            <p style={{ color: "blue" }}>{product.price}</p>
            <button onClick={addToCart}>Add To Card</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductArray;
