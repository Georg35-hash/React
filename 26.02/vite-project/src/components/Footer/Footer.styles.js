import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  background-color: #232425;
  width: 100%;
  padding: 64px 20px 48px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1420px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const P = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--font-size-input);
`;

export const Title = styled.p`
  color: var(--color-text-secondary);
  font-size: 24px;
`;

export const Copyright = styled(P)`
  font-size: 20px;
`;

export const OtherContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;

  @media (max-width: 768px) {
    align-items: flex-start;
    gap: 30px;
  }
`;

export const Links = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: 400px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding-bottom: 15px;
  color: var(--color-text-secondary);

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
