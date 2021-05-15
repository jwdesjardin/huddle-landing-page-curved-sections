import React from 'react'
import Image from 'next/image'
import styles from './FooterBrand.module.css'

export const FooterBrand = () => {
	return (
		<div>
			{/* BRAND */}
			<div className={styles.imageBox}>
				<Image src='/images/logo-white.svg' alt='huddle brand logo' height='38px' width='240px' />
			</div>
			<p className={styles.brandText}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit
				lacinia vestibulum a, ultrices quis sem.
			</p>

			{/* CONTACT  */}
			<div className={styles.contactContainer}>
				<div className={styles.contactRow}>
					<div className={styles.contactIcon}>
						<Image src='/images/icon-phone.svg' alt='phone icon' width='18px' height='18px' />
					</div>
					<div className={styles.contactText}>Phone: +1-543-123-4567</div>
				</div>
				<div className={styles.contactRow}>
					<div className={styles.contactIcon}>
						<Image src='/images/icon-email.svg' alt='email icon' width='18px' height='18px' />
					</div>
					<div className={styles.contactText}>example@huddle.com</div>
				</div>
			</div>

			{/* SOCIAL LINKS */}
			<div className={styles.socialContainer}>
				<a className={styles.socialLink} href='#'>
					<i className='fab fa-facebook-square'></i>
				</a>
				<a className={styles.socialLink}>
					<i className='fab fa-instagram'></i>
				</a>
				<a className={styles.socialLink}>
					<i className='fab fa-twitter-square'></i>
				</a>
			</div>
		</div>
	)
}
