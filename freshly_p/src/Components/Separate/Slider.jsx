import React, { useState } from "react";
import style from "./style.module.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "@chakra-ui/react";

const Slider = () => {
  let arr;

  const [toggle, setToggle] = useState(0);

  let toggleCount = () => {
    if (toggle === 0) setToggle(1);
    else setToggle(0);
  };

  if (toggle === 0) {
    arr = [
      {
        id: 1,
        img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        text1: "Freshly has changed our lives!",
        text2:
          "With Freshly, we don’t have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it.",
        text3: "Dave",
      },
      {
        id: 2,
        img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        text1: "10 stars! Awesome! Love it!",
        text2:
          "We love Freshly because it takes two minutes to prepare, the food is great and we don’t have to spend time cleaning up.",
        text3: "Sheri",
      },
      {
        id: 3,
        img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        text1: "One of the easiest decisions I've made",
        text2:
          "With Freshly, I don’t have to think about what I’m going to eat for lunch each day and feel good knowing that I’m eating a healthy meal. I love the convenience!",
        text3: "Cindi",
      },
    ];
  } else if (toggle === 1) {
    arr = [
      {
        id: 1,
        img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        text1: "Amazingly delicious and convenient!",
        text2:
          "I love that I have found freshly and I highly recommend. it allows me to try new things and also as well allows me to eat healthy while remaining affordable at the same time!",
        text3: "Jessica Wilson",
      },
      {
        id: 2,
        img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        text1: "Convenience, taste, variety",
        text2:
          "Been a customer for more than a year now, and love it. Customer service is particularly outstanding — whenever there’s been a problem, Freshly staff respond quickly and always rectify the problem.",
        text3: "Jeffrey",
      },
      {
        id: 3,
        img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/5d96607e740addd99bf570ae_star.svg",
        text1: "Delicious! So yummy!",
        text2:
          "The convenience of a well prepared, healthy, flavorful meal with no shopping, preparing, or clean up is simply amazing. Looking forward to the rest of the week.",
        text3: "Kristie Geiges",
      },
    ];
  }

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <div className={style.rate}>
        <Button onClick={toggleCount} className={style.showbtn}>
          <MdKeyboardArrowLeft />
        </Button>
        <div className={style.subrate}>
          {arr.map((e) => (
            <div key={e.id} className={style.show}>
              <img src={e.img} alt="sliderStars" />
              <p className={style.a}>{e.text1}</p>
              <p className={style.b}>{e.text2}</p>
              <p className={style.c}>{e.text3}</p>
            </div>
          ))}
        </div>
        <Button onClick={toggleCount} className={style.showbtn}>
          <MdKeyboardArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Slider;
