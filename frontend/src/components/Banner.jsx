import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #854458; /* Set background color */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
`;

const Banner = () => {
  const [text, setText] = useState("DELIVERY DELAYS EXPECTED ｜ HOTLINE: +94 70 326 1111");

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText =>
        prevText === "DELIVERY DELAYS EXPECTED ｜ HOTLINE: +94 70 326 1111"
          ? "Free Delivery For Local Orders Over LKR 5500/="
          : "DELIVERY DELAYS EXPECTED ｜ HOTLINE: +94 70 326 1111"
      );
    }, 3000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Slider>
        {text}
      </Slider>
    </Container>
  );
};

export default Banner;
