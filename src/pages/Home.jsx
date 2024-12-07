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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const SkillCategory = styled.div`
  h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.Text};
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  &::before {
    content: "•";
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.Text};
  }
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

const SubTitle2 = styled.h2`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.Text};
`;


function Home() {
    return (
        <div className="container">
            <HeroSection>
                <div>
                    <Title>Hello, I'm Alex!</Title>
                    <SubTitle>Backend Developer | API Specialist | Docker Enthusiast</SubTitle>
                    <SubTitle2>I specialize in building scalable APIs, microservices, and containerized applications with Go and Docker. I also deploy and manage my own home server to host and scale web services, simulating production-like environments for testing and development.</SubTitle2>
                </div>
            </HeroSection>

            <SkillsSection>
                <SkillCategory>
                    <h3>Programming Languages</h3>
                    <ul>
                        <SkillItem>Go</SkillItem>
                        <SkillItem>JavaScript</SkillItem>
                    </ul>
                </SkillCategory>

                <SkillCategory>
                    <h3>Backend Technologies</h3>
                    <ul>
                        <SkillItem>RESTful APIs</SkillItem>
                    </ul>
                </SkillCategory>

                <SkillCategory>
                    <h3>DevOps & Infrastructure</h3>
                    <ul>
                        <SkillItem>Docker</SkillItem>
                    </ul>
                </SkillCategory>

                <SkillCategory>
                    <h3>Databases</h3>
                    <ul>
                        <SkillItem>MySQL</SkillItem>
                    </ul>
                </SkillCategory>

                <SkillCategory>
                    <h3>Other Tools</h3>
                    <ul>
                        <SkillItem>Git</SkillItem>
                        <SkillItem>Linux</SkillItem>
                    </ul>
                </SkillCategory>
            </SkillsSection>

            <PortfolioSection>
                <h2>Featured Projects</h2>
                <p>Check out some of my latest work...</p>
            </PortfolioSection>
        </div>
    );
}

export default Home;

