import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar.jsx';
import ImageCard from '../components/ImageCard.jsx';

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({theme}) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({theme}) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px){
    font-size: 20px;
  }
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({theme}) => theme.secondary};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;
  @media(min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media(min-width: 640px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Home = () => {
  const item = {
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png",
    author: "Ayush",
    prompt: "HEY Prompt",
  };
  return (
    <Container>
      <Headline>Explore popular posts in the Community!
        <Span>⦿ Generated with AI ⦿</Span>
      </Headline>
      <SearchBar/>
      <Wrapper>
        <CardWrapper>
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
          <ImageCard item={item} />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default Home;
