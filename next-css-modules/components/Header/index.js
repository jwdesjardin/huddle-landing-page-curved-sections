import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

export const Header = () => {
	return (
		<div className={styles.container + ' contained'}>
			<Image
				className={styles.logo}
				src='/images/logo.svg'
				alt='huddle logo'
				width='240px'
				height='38px'
			/>
			<button className={styles.button}>Try It Free</button>
		</div>
	)
}
