import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

export const SalesInfoSection = ({ imgURL, altText, title, text, bgBlue, reversed }) => {
	return (
		<div className={bgBlue ? `${styles.container} blue-bg` : `${styles.container}`}>
			<div className='flex-row contained'>
				<div className={reversed ? `${styles.imageBox}` : `${styles.imageBox} place-second`}>
					<Image src={imgURL} alt={altText} width='530px' height='400px' />
				</div>
				<div className={styles.contentBox}>
					<h2 className={styles.heading}>{title}</h2>
					<p className={styles.text}>{text}</p>
				</div>
			</div>
		</div>
	)
}
