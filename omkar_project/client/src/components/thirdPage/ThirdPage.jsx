import React from "react";
// import styles from "./ThirdPage.module.css"
import hh from "../../assets/p1.png";
const ThirdPage = () => {
  const cardData = [
    {
      title: "What is CH4",
      content:
        "Methane (CH4) is a colorless, odorless gas composed of one carbon atom bonded to four hydrogen atoms. It is the simplest hydrocarbon and is highly flammable. Methane is the primary component of natural gas and is an important fuel source.",
      color: "#FF6B6B",
    },
    {
      title: "Pros of CO2 in atmosphere",
      content:
        "CO2 is essential for photosynthesis in plants, helping to regulate Earth's temperature through the greenhouse effect, and is used in various industrial processes.",
      color: "#4ECDC4",
    },
    {
      title: "Causes of CO2",
      content:
        "Major sources of CO2 include burning fossil fuels, deforestation, land-use changes, and industrial processes. Natural sources include volcanoes, ocean release, and respiration.",
      color: "#45B7D1",
    },
    {
      title: "Consequences of increase in CO2",
      content:
        "Rising CO2 levels contribute to global warming, ocean acidification, changes in vegetation patterns, and potential impacts on human health and food security.",
      color: "#F7B267",
    },
    {
      title: "Sustainability of CO2",
      content:
        "Achieving sustainable CO2 levels involves reducing emissions through renewable energy adoption, improving energy efficiency, reforestation, and developing carbon capture technologies.",
      color: "#6A0572",
    },
  ];

  return (
    <div className="container">
      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          color: white;
          //   width: 100%;
        }
        .container {
          max-width: 95%;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          //   background-color;
        }
        .headd {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
        }
        h1 {
          text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00;
          font-size: 3.5rem;
          text-align: center;
          margin-bottom: 1rem;
          width: fit-content;
          // animation: glow 1s ease-in-out infinite alternate;
        }

        .image-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .image-container img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .description {
          font-size: 1.1rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto 2rem;
        }
        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }
        .timeline::after {
          content: "";
          position: absolute;
          width: 4px;
          background-color: #333;
          top: 0;
          bottom: 0;
          left: 49%;
          margin-left: -3px;
        }
        .card {
          padding: 1.5rem;
          position: relative;
          width: calc(50% - 30px);
          border-radius: 8px;
          color: white;
          margin-bottom: 2rem;
        }
        .card::after {
          content: "";
          position: absolute;
          width: 25px;
          height: 25px;
          background-color: #333;
          border: 4px solid #ff9f55;
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }
        h2 {
          align-content: center;
        }
        .left {
          left: 0;
        }
        .right {
          left: 50%;
        }
        .left::after {
          right: -17px;
        }
        .right::after {
          left: -16px;
        }
        .card-content {
          padding: 20px;
        }
        .main h2 {
          color: violet;
          // text-decoration: bright;
          font-weight: 800;
          font-size: 20px;
        }
        .card-content h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .card-content p {
          font-size: 1rem;
          line-height: 1.5;
        }
        .main {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: centre;
          justify-content: space-between;
        }
        @media screen and (max-width: 600px) {
          .timeline::after {
            left: 31px;
          }
          .card {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          .card::after {
            left: 15px;
          }
          .left::after,
          .right::after {
            left: 15px;
          }
          .right {
            left: 0%;
          }
        }
      `}</style>

      <div className="headd">
        <h1>Methane (CH4) </h1>
      </div>

      <div className="main">
        <h2 className="description">
          Methane is a powerful greenhouse gas and the main component of natural
          gas. It plays a significant role in global climate change and energy
          production.
        </h2>
        <div className="image-container">
          <img className="im" src={hh} alt="Carbon dioxide molecule" />
        </div>
      </div>

      <div className="timeline">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card ${index % 2 === 0 ? "left" : "right"}`}
            style={{ backgroundColor: card.color }}
          >
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
