import styled from '@emotion/styled';

export const StyledTotal = styled.div`
  	width: 388px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px;
  background-color: #fafafa;
  height: fit-content;
  font-size: 24px;
  color: rgba(0, 0, 0, .7);

  @media (max-width: 768px) {
	display: flex;
    width: 100%;
    padding: 20px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 18px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  color: black;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Price = styled.p`
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Text = styled.p`
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 42px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 40px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    margin-bottom: 30px;
    gap: 20px;
  }
`;

export const Action = styled.div`
  font-weight: var(--font-bold);
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid rgba(0, 0, 0, .5);
  color: black;

  @media (max-width: 768px) {
    padding: 10px 0;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px 0;
    gap: 8px;
  }
`;
