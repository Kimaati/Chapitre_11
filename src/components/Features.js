import React from "react";
import IconChat from "../assets/img/icon-chat.png";
import IconMoney from "../assets/img/icon-money.png";
import IconSecurity from "../assets/img/icon-security.png";

const data = [
  {
    id: 1,
    image: IconChat,
    alt: "Chat icon",
    title: "Your are our #1 priority",
    desc: "Need to talk to representative ? You can get in touch through our ... chat or through a phone call in less than 5 minutes.",
  },
  {
    id: 2,
    image: IconMoney,
    alt: "Money icon",
    title: "More savings means higher rates",
    desc: "The more you save with us, the higher your interest rate will be !",
  },
  {
    id: 3,
    image: IconSecurity,
    alt: "Security icon",
    title: "Security you can trust",
    desc: "We use top of the line encryption to make sure your data and money is always saf",
  },
];

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>

      {data.map(({ id, image, alt, title, desc }) => {
        return (
          <div key={id} className="feature-item">
            <img src={image} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Features;
