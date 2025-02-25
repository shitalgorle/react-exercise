import React, { useState } from "react";
import "./AmazonOne.css";

const BoxOne = () => {
  const [counter, setCounter] = useState(0);

  const count = () => {
    setCounter(counter + 1);
  };

  const products = [
    {
      id: 1,
      name: "Motherboard",
      price: "₹19,385.",
      image: "https://m.media-amazon.com/images/I/71zMsBQQrwL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "Hard Drive",
      price: "₹7199.",
      image: "https://m.media-amazon.com/images/I/81u47A2BChL._AC_UY218_.jpg",
    },
    {
      id: 3,
      name: "Memory",
      price: "₹77,240.",
      image: "https://m.media-amazon.com/images/I/71voo8ncazL._AC_UY218_.jpg",
    },
    {
      id: 4,
      name: "Control unit",
      price: " ₹1,299",
      image: "https://m.media-amazon.com/images/I/51DngImstjL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
     id: 5,
     name: "Registers",
     price: "₹7,499.",
     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHBiderqYEibjJClmM_Nx-dgNtNaPZRgs9Q&s",
    },
  
    {
        id: 6,
        name: "Power supply",
        price: "₹1,999",
        image: "https://m.media-amazon.com/images/I/81QiEmmEbWL._AC_UY218_.jpg",
      },
      {
        id: 7,
        name: "Cooling Fan",
        price: "₹315.",
        image: "https://m.media-amazon.com/images/I/51Nhy4Nrn9L._SY445_SX342_QL70_FMwebp_.jpg",
      },
      {
        id: 8,
        name: "Buses",
        price: "₹3,450.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2SFaKHTmNz9IYZqZyl6nj6DG_fEMYyFPSQ&s",
      },
      {
        id: 9,
        name: "Monitor",
        price: "₹7,600.",
        image: "https://m.media-amazon.com/images/I/71IZVnU5iXL._AC_UY218_.jpg",
      },
      {
       id: 10,
       name: "Video card",
       price: "₹1,499.",
       image: "https://m.media-amazon.com/images/I/81LkkH2bYNL._AC_UY218_.jpg",
      },
      
      {
        id: 11,
        name: "Cache",
        price: "₹1,999",
        image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/12/cpu-cache.jpg",
      },
      {
        id: 12,
        name: "Keyboard",
        price: "₹2,315.",
        image: "https://m.media-amazon.com/images/I/41zOD6guR0L._SX300_SY300_QL70_FMwebp_.jpg",
      },
      {
        id: 13,
        name: "Mouse",
        price: "₹3,99.",
        image: "https://m.media-amazon.com/images/I/51HeLbYrvqL._AC_UY218_.jpg",
      },
      {
        id: 14,
        name: "Processor 8 cores",
        price: " ₹12,919",
        image: "https://m.media-amazon.com/images/I/41mG-9GZkCL._SY300_SX300_QL70_FMwebp_.jpg",
      },
      {
       id: 15,
       name: "SURYAASYS CORE I5 4590  Processor",
       price: "₹1,999.",
       image: "https://m.media-amazon.com/images/I/41pI-kxuugL._SX300_SY300_QL70_FMwebp_.jpg",
      },

  ];

  return (
    <>
      <header>
        <div className="nav-bar">
          <div className="header-logo">Amazon</div>
          <ul>
            <li>
              <button>
                <a href="#" style={{ color: "black" }}>Search</a>
              </button>
              <img src="./card.jpg" alt="Placeholder" /> {counter}
            </li>
          </ul>
        </div>
      </header>
      <div className="container">
        <h1>CPU Parts:</h1>
        <div className="main-one">
          {products.map((product) => (
            <div key={product.id} className="product-container">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "150px", height: "180px" }}
              />
              <p>{product.name}</p>
              <p style={{ color: "blue" }}>{product.price}</p>
              <button onClick={count}>Add to Cart</button>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default BoxOne;

