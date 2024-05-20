import React from "react";
import styled from "styled-components";
import { Room, Phone, MailOutline } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg?w=1480&t=st=1714846885~exp=1714847485~hmac=b8ad6789bbcac7f945e1ca3583ca986dd69afb1a94d1b5ba94b511ec2e8139c4"); /* Replace "your-background-image.jpg" with your actual image file */
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

const ContactContainer = styled.div`
  background-color: #f8f9fa;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  background-color: #343a40;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const InfoText = styled.p`
  font-size: 1rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
`;

const FormButton = styled.button`
  padding: 10px;
  background-color: #343a40;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const ContactUs = () => {
  return (
    <Container>
      <Overlay>
        <ContactContainer>
          <Title>Contact Us</Title>
          <ContactInfo>
            <Icon>
              <Room />
            </Icon>
            <InfoText>No. 76, Kurunduwattha, Colombo 07</InfoText>
          </ContactInfo>
          <ContactInfo>
            <Icon>
              <Phone />
            </Icon>
            <InfoText>+94 29 119 29</InfoText>
          </ContactInfo>
          <ContactInfo>
            <Icon>
              <MailOutline />
            </Icon>
            <InfoText>artsy@gmail.com</InfoText>
          </ContactInfo>
          <Title>Get in Touch</Title>
          <ContactForm>
            <FormInput type="text" placeholder="Your Name" />
            <FormInput type="email" placeholder="Your Email" />
            <FormTextarea
              rows="5"
              placeholder="Your Message"
            ></FormTextarea>
            <FormButton type="submit">Send Message</FormButton>
          </ContactForm>
        </ContactContainer>
      </Overlay>
    </Container>
  );
};

export default ContactUs;
