import React from 'react';

interface HeroProps {
  tagline?: string;
  title: string;
  description?: string[];
}

/**
 * Hero Component
 * Large hero section with tagline, title, and description
 */
export const Hero: React.FC<HeroProps> = ({
  tagline,
  title,
  description = [],
}) => {
  return (
    <div className="hero">
      {tagline && <p className="hero__tagline">{tagline}</p>}
      <h1 className="hero__title">{title}</h1>
      {description.length > 0 && (
        <div className="hero__description">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export const heroStyles = `
  .hero {
    display: flex;
    flex-direction: column;
    gap: 55px;
    justify-content: center;
    height: 100%;
    padding: 48px 89px;
  }

  .hero__tagline {
    font-family: 'SF Pro', -apple-system, sans-serif;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 0 3px;
    margin: 0;
  }

  .hero__title {
    font-family: 'SF Pro', -apple-system, sans-serif;
    font-size: 198px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: -0.028em;
    color: #f5f1e9;
    text-shadow: 0px 35px 71px rgba(0, 0, 0, 0.15);
    margin: 0;
  }

  .hero__description {
    display: flex;
    flex-direction: column;
    font-family: 'SF Pro Text', -apple-system, sans-serif;
    font-size: 34px;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: -0.019em;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
  }

  .hero__description p {
    margin: 0;
  }
`;

export default Hero;
