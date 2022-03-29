import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.5rem;
`;

export const CardImg = styled.img`
  width: 200px;
  height: 250px;
  cursor: pointer;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDetails = styled.div`
  width: 12rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0rem;
`;

export const CardName = styled.div`
  font-size: 1rem;
`;

export const CardLikes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.15rem;
`;

export const LikesImg = styled.img`
  width: 0.8rem;
  height: 0.8rem;
`;

export const LikesNum = styled.div`
  height: 1rem;
  color: #000;
  font-size: 0.8rem;
`;

export const CardTags = styled.div`
  /* display: flex; */
  width: 12rem;
  gap: 0.5rem;
`;

export const CardTag = styled.span`
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  border: 1px solid #000;
  border-radius: 0.3rem;
  padding: 0.2rem;
  margin-right: 0.2rem;
`;
