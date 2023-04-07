import React from 'react'
import classes from './SectionNav.module.css'
export const SectionNav = () => {
  return (
    <div className={classes.sectionNav}>
		<ul className={classes.sectionNavList}>
            <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
            <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
            <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
            <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
		</ul>
	</div>
  )
}
