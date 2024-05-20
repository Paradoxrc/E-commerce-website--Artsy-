import { Send } from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('https://img.freepik.com/free-photo/beautiful-young-woman-with-kind-smile-holding-hands-heart-smiling-receive-compliment-feeling_1258-128899.jpg?w=1380&t=st=1714886321~exp=1714886921~hmac=70c2bd932808e26a8f9fc1566d33d67fdf3a4f5b8d20b1528cde10b25b31cf47');
  background-size: cover; 
  background-position: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;


`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;