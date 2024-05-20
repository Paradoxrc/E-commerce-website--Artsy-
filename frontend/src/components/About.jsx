import React from "react";
import styled from "styled-components";
import { FaGem, FaLaptop, FaTshirt } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://img.freepik.com/free-psd/blank-wall-psd-japandi-living-room-interior_53876-109284.jpg?w=1380&t=st=1714847456~exp=1714848056~hmac=81c1b223faeda60937c8446eb7b474935c97f03a46e6e6562adf64c752b76b9c");
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #f8f9fa;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin: 0 20px;
  color: #343a40;
`;

const About = () => {
  return (
    <Container>
      <Overlay>
        <Content>
          <Title>About Us</Title>
          <Section>
            <SectionTitle>Our Mission</SectionTitle>
            <Description>
              Welcome to our ecommerce platform! At our store, we're passionate
              about bringing you the latest trends in fashion, cutting-edge
              electronics, and exquisite jewelry. Our mission is to provide you
              with a seamless shopping experience, where you can explore a
              curated selection of high-quality products from the comfort of your
              home.
            </Description>
          </Section>
          <Section>
            <SectionTitle>Our Offerings</SectionTitle>
            <IconContainer>
              <Icon>
                <FaTshirt />
              </Icon>
              <Icon>
                <FaLaptop />
              </Icon>
              <Icon>
                <FaGem />
              </Icon>
            </IconContainer>
            <Description>
              We pride ourselves on offering a diverse range of apparel,
              including trendy clothing for men, women, and children. Whether
              you're looking for casual wear, formal attire, or stylish
              accessories, we have something for everyone. In addition to
              fashion, we also feature a wide array of electronics to suit your
              lifestyle. From state-of-the-art smartphones and tablets to smart
              home devices and gaming consoles, we've got you covered with the
              latest tech gadgets. And let's not forget about our stunning
              jewelry collection, meticulously crafted to add a touch of elegance
              to any ensemble. From timeless classics to contemporary designs,
              each piece is carefully selected to reflect your unique style and
              personality.
            </Description>
          </Section>
          <Section>
            <SectionTitle>Thank You!</SectionTitle>
            <Description>
              Thank you for choosing us as your go-to destination for all things
              fashion, electronics, and jewelry. Happy shopping!
            </Description>
          </Section>
        </Content>
      </Overlay>
    </Container>
  );
};

export default About;
