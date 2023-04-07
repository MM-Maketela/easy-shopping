import React from 'react'

import LogoImg from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';

 export const  Logo = () => {
  return (
    <div className="header-logo">
	    <a  href="#" className="logo" >
				
		    <img src={LogoImg} alt=""/>
		</a>
	</div>
  );
}
