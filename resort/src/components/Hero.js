import React from 'react';

const Hero = ({ children, className }) => <header className={className}>{children}</header>;

Hero.defaultProps = {
  className: 'defaultHero',
};

export default Hero;
