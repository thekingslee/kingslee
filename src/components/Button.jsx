import React from 'react';
import explore from '../images/icons/Planet.svg';
import exploreDark from '../images/icons/dark/planet.svg';
import { Link } from 'react-router-dom';

const Button = ({ cta, userTheme }) => {
  return (
    <Link
      to="projects"
      className="mx-auto inline-flex py-[10px] px-[18px] dark:bg-imagination bg-dim-secondary text-imagination dark:text-dim-secondary font-medium rounded-md"
    >
      <p className="mr-2">{cta}</p>{' '}
      {userTheme === 'dark' ? (
        <img src={exploreDark} alt="" />
      ) : (
        <img src={explore} alt="" />
      )}
    </Link>
  );
};

export default Button;
