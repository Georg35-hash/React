import styled from "@emotion/styled";

export const Card = styled.div`
  width: 386px;
  height: 393px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 42px;
  padding: 39px;
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 340px;
    height: auto;
    padding: 30px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 20px;
    border-radius: 24px;
  }
`;

export const Image = styled.img`
  width: 278px;
  height: 127px;
  margin-bottom: 32px;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h3`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 42px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const Price = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Amount = styled.p`
  font-weight: var(--font-bold);
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AddButton = styled.button`
  width: 37px;
  height: 37px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  background-color: #e9e9e9;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;
