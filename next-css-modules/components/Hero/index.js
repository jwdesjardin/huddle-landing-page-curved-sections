import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

export const Hero = ({ heading, text, button, imgURL, altText, secondary }) => {
	return (
		<div className={styles.container + ' contained'}>
			{/* OPTIONAL HEADER */}
			{heading && (
				<h1 className={secondary ? styles.secondaryTitle : styles.primaryTitle}>{heading}</h1>
			)}
			{/* OPTIONAL TEXT */}
			{text && <p className={styles.text}>{text}</p>}
			{/* OPTIONAL BUTTON */}
			{button && <button className={styles.button}>Get Started For Free</button>}
			{/* OPTIONAL IMAGE */}
			{imgURL && (
				<div style={{ margin: '6rem 0 1rem' }}>
					<Image src={imgURL} alt={altText ? altText : ''} width='1016px' height='720px' />
				</div>
			)}
		</div>
	)
}
