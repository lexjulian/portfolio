import styled from 'styled-components';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const PortfolioSection = styled.section`
  padding: ${({ theme }) => theme.spacing.large};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.heading};
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.subtleText};
`;

function Home() {
  return (
    <div className="container">
      <HeroSection>
        <div>
          <Title>Hello, I'm Alex!</Title>
          <SubTitle>Developer & Designer</SubTitle>
        </div>
      </HeroSection>

      <SkillsSection>
        <h2>Skills</h2>
        <p>JavaScript, React, CSS, HTML, and more...</p>
      </SkillsSection>

      <PortfolioSection>
        <h2>Featured Projects</h2>
        <p>Check out some of my latest work...</p>
      </PortfolioSection>

    </div>
  );
}

export default Home;

