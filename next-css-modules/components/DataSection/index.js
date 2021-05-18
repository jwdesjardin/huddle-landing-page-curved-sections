import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

export const DataSection = () => {
	return (
		<section className='flex-row contained' style={{ maxWidth: '1200px' }}>
			<DataSectionBox
				imgURL='/images/icon-communities.svg'
				heading='1.4k+'
				text='Communities Formed'
			></DataSectionBox>
			<DataSectionBox
				imgURL='/images/icon-messages.svg'
				heading='2.7m+'
				text='Messages Sent'
			></DataSectionBox>
		</section>
	)
}

const DataSectionBox = ({ imgURL, heading, text }) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageBox}>
				<Image height='48px' width='48px' src={imgURL} alt='communities icon' />
			</div>
			<h2 className={styles.heading}>{heading}</h2>
			<p className={styles.text}>{text}</p>
		</div>
	)
}
