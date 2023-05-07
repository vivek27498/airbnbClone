import React from "react";
import starLogo from "../images/star.png";
// import housePhoto from "../images/image.jpg";
import "../styles/card.css";
import { useState } from "react";

export default function Card() {
  const [jsonArray] = useState([
    {
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-2694793/original/a6d39bc6-9564-4503-8b84-c796ecda03af.jpeg?im_w=720",
      country: "Nantes,France",
      desc: "Blue lagoons resort at Maldives",
      price: "$136",
      rating: "4.0",
    },
    {
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
      country: "Surry Hills, Australia",
      desc: "Blue lagoons resort at Maldives",
      price: "$136",
      rating: "4.5",
    },
    {
      image: "https://a0.muscache.com/im/pictures/airflow/Hosting-588792902420108198/original/4fe69a39-0584-433f-aca1-92b59b36821d.jpg?im_w=720",
      country: "Varsea, Italy",
      desc: "Blue lagoons resort at Maldives",
      price: "$136",
      rating: "4.6",
    },
    {
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=720",
      country: "Linfiled, UK",
      desc: "Blue lagoons resort at Maldives",
      price: "$136",
      rating: "4.9",
    },
  ]);

  return (
    <div>
      <section>
        <div className="container">
          <div className="cards">
            {jsonArray.map((item, index) => {
              return (
                <div className="card">
                  <img
                    src={item.image}
                    className="card--image"
                    alt="not found"
                  />
                  <div className="card--stats">
                    <img
                      src={starLogo}
                      className="card--star"
                      alt="not found"
                    />
                    <span className="gray">{item.rating}</span>
                    <span className="gray">{item.country}</span>
                  </div>
                  <p>Blue lagoons resort at Maldives</p>
                  <p>
                    <span className="bold">From $136</span> / person
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
