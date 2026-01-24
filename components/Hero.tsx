import React from 'react';

interface HeroProps {
  tagline?: string;
  title: string;
  description?: string[];
}

/**
 * Hero Component
 * Large hero section with tagline, title, and description
 *
 * Required CSS: Import 'css/main.css' or use the class names below:
 * - .hero
 * - .text-tagline (for tagline)
 * - .text-hero (for title)
 * - .text-subtitle-lg (for description)
 */
export const Hero: React.FC<HeroProps> = ({
  tagline,
  title,
  description = [],
}) => {
  return (
    <div className="hero">
      {tagline && (
        <div className="hero__tagline-container">
          <p className="text-tagline">{tagline}</p>
        </div>
      )}
      <div className="hero__title-container">
        <h1 className="text-hero">{title}</h1>
      </div>
      {description.length > 0 && (
        <div className="hero__description">
          {description.map((line, index) => (
            <p key={index} className="text-subtitle-lg">{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * @deprecated Styles are now in css/components.css
 * Import 'css/main.css' instead of using this export
 */
export const heroStyles = `/* Styles moved to css/components.css - import css/main.css */`;

export default Hero;
