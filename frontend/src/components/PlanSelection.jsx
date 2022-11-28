import React, { useState, useEffect } from 'react';

import styles from '../styles/planselectionPage.module.css';

function PlanSelection() {
	const [data, setData] = useState(false);
	const [monthData, setMonthData] = useState(null);
	const [yearData, setYearData] = useState(null);

	useEffect(() => {
		fetch('data.json')
			.then((res) => {
				return res.json();
			})
			.then((jsonData) => {
				// let mData = jsonData.Monthly;
				// mData.sort((a, b) => {
				// 	return a.price < b.price;
				// });
				// let yData = jsonData.Yearly;
				// yData.sort((a, b) => {
				// 	return a.price < b.price;
				// });
				// setMonthData(mData);
				// setMonthData(yData);
				console.log(jsonData);
			});
	}, []);
	return (
		<div className={styles.container}>
			<h1>Choose the right plan for you</h1>

			<div className={styles.body}>
				<div className={styles.gridContainer}>
					<div className={styles.sliderContainer}>
						<span className={styles.sliderItem}>Monthly</span>
						<span className={styles.sliderItem}>Yearly</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlanSelection;
