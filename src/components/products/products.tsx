import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <section id="products" className="products">
      <h2 className="headings">Our Products</h2>
      <div
        className="product-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
        }}
      >
        {[
          {
            id: 1,
            name: "Extremely Cozy Beanie",
            price: "25.00",
            image: "/logo.jpg",
          },
          {
            id: 2,
            name: "Very big and large Knitted Scarf",
            price: "30.00",
            image: "/logo.jpg",
          },
          { id: 3, name: "Yarn Basket", price: "20.00", image: "/logo.jpg" },
          { id: 4, name: "Warm Blanket", price: "50.00", image: "/logo.jpg" },
        ].map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.image}
              alt={`Crochet Product ${product.id}`}
              width={200}
              height={200}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <a
        href="/order"
        style={{
          display: "block",
          margin: "20px auto",
          backgroundColor: "#c54e74",
          color: "white",
          fontSize: "18px",
          borderRadius: "8px",
          padding: "1rem 2rem",
          maxWidth: "50%",
          border: "#ddd solid 1px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        View More
      </a>
    </section>
  );
};

export default Products;
