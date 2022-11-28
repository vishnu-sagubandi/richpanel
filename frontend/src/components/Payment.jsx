import React, { useState, useEffect, useRef } from 'react';
import { Icon } from 'semantic-ui-react';
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import styles from '../styles/payment.module.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');

function Payment() {
	const CARD_ELEMENT_OPTIONS = {
		style: {
			base: {
				color: '#32325d',
				fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: '#aab7c4',
				},
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a',
			},
		},
	};

	const handleSubmit = () => {
		console.log('Payment clicked');
	};
	return (
		<Elements stripe={stripePromise}>
			<div className={styles.bg}>
				<div className={styles.centerDiv}>
					<div className={styles.cardDetails}>
						<h2 className={styles.heading}>Complete Payment</h2>
						<p>Enter your credit card details below</p>
						<form onSubmit={handleSubmit}>
							<div className={styles.cardNumberInput}>
								<CardElement options={CARD_ELEMENT_OPTIONS} />
							</div>
							<Button
								variant='contained'
								size='large'
								sx={{
									backgroundColor: '#1e4c90',
									fontSize: '1rem',
									margin: '2rem 0',
								}}>
								Confirm Payment
							</Button>
						</form>
					</div>
					<div className={styles.orderDetails}>
						<h2 className={styles.heading}>Order Summary</h2>

						<div className={styles.row}>
							<p>Plan Name</p>
							<p>Basic</p>
						</div>
						<div className={styles.row}>
							<p>Billing cycle</p>
							<p>Monthly</p>
						</div>
						<div className={styles.row}>
							<p>Plan Price</p>
							<p>
								<CurrencyRupeeIcon fontSize='small' />
								2,000
							</p>
						</div>
					</div>
				</div>
			</div>
		</Elements>
	);
}

export default Payment;
