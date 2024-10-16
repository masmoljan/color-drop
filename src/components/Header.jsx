import React from 'react';
import { APP } from '../utils/constants';

const Header = () => {
  return (
    <>
      <h3 className="label">{APP.NAME}</h3>
      <p className="description">{APP.DESCRIPTION}</p>
      <br></br>
      <p className={`description tip`}>{APP.TIP}</p>
      <br></br>
    </>
  )
}

export default Header;