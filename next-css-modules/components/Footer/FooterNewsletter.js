import React from 'react'
import styles from './FooterNewsletter.module.css'

export const FooterNewsletter = () => {
	return (
		<div className={styles.container}>
			<p className={styles.heading}>Newsletter</p>
			<p className={styles.text}>
				To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
				send you spam or pass on your email address
			</p>
			<form className={styles.form}>
				<input type='email' className={styles.input} required />
				<button className={styles.button}>Subscribe</button>
			</form>
		</div>
	)
}
