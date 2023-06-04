import React from 'react'
import classes from './NewLetter.module.css'
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin,AiOutlineMail} from 'react-icons/ai/index.esm'
import {FaFacebookF} from 'react-icons/fa/index.esm'
import { Link } from 'react-router-dom'
export const NewsLetter = () => {
	const sizeOfSocialMediaIcon = 20;
  return (
    <div className={classes.newsLetterContainer}>
						<div className={classes.newsLetter}>
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form className={classes.form}>
								<div>
								<input className={classes.userInput} type="email" placeholder="Enter Your Email"/>
								</div>

								<div className={classes.submitBtnCtn}>
								<button className={classes.submitBtn}>
									<div><div><AiOutlineMail size={15}/></div> <div>Subscribe</div></div>
									</button>
								</div>
							</form>
							<ul className={classes.socialMediaFollow}>
								<li>
									<Link to="/"><FaFacebookF size={sizeOfSocialMediaIcon} id={classes.smIconId}/></Link>
								</li>
								<li>
									<Link to="/"> <AiOutlineTwitter size={sizeOfSocialMediaIcon} id={classes.smIconId}/></Link>
								</li>
								<li>
									<Link to="/">< AiOutlineInstagram size={sizeOfSocialMediaIcon} id={classes.smIconId}/></Link>
								</li>
								<li>
									<Link to="/"> <AiOutlineLinkedin size={sizeOfSocialMediaIcon} id={classes.smIconId}/></Link>
								</li>
							</ul>
						</div>
					</div>
  )
}
