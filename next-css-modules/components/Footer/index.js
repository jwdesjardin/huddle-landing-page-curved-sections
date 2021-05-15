import React from 'react'
import { FooterNewsletter } from './FooterNewsletter'
import { FooterBrand } from './FooterBrand'

import styles from './index.module.css'

export const Footer = () => {
	return (
		<div className={styles.container}>
			<div className='flex-row contained'>
				{/* footer newletter  */}
				<div className={`${styles.largeColContainer} place-second`}>
					<FooterNewsletter></FooterNewsletter>
				</div>

				<div className={styles.mediumColContainer}>
					{/* footer brand  */}
					<FooterBrand></FooterBrand>
				</div>
			</div>
		</div>
	)
}
