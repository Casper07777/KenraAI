import React from 'react';
import styled from 'styled-components';
import GenerateImageForm from '../components/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';
import { useState } from 'react';


const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({theme}) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
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
  height: fit-content;
  max-width: 1200px;
  gap: 8%;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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

const CreatePost = () => {
  const [generatedImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setcreatePostLoading] = useState(false);
  const [post,setPost] = useState({
    name: "",
    prompt: "",
    photo : "",
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm 
        post = {post} 
        setPost = {setPost} 
        createPostLoading = {createPostLoading} 
        setGenerateImageLoading={setGenerateImageLoading}
        generatedImageLoading = {generatedImageLoading}
        setcreatePostLoading={setcreatePostLoading}
        />
        <GeneratedImageCard src = {post?.photo} loading = {generatedImageLoading} />
      </Wrapper>
      </Container>
  )
}

export default CreatePost