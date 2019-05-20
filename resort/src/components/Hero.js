import React from 'react';

const Hero = ({ children, className }) => <header className={className}>{children}</header>;

Hero.defaultProps = {
  hero: 'defaultHero',
};

export default Hero;
