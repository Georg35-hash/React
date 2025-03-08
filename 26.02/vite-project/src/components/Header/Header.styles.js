import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  background-color: #3b3c3d;
  width: 100%;
  padding: 0 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1420px;
  margin: 0 auto;
  min-height: 110px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    min-height: auto;
    padding: 20px 0;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 900;
  line-height: 1.2;
  color: var(--color-text-secondary);
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 64px;

  @media (max-width: 768px) {
    gap: 32px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;
