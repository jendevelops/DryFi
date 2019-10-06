import React, { Component } from 'react'
import './CardContainer.css'
import EnvironmentMetrics from './EnvironmentMetrics.js'
import Header from './Header'
export default class CardContainer extends Component {
	constructor() {
		super()
		this.state = {
			insideTemp: null,
			insideHumidity: null,
			outsideTemp: null,
			outsideHumidity: null,
			windSpeed: null,
		}
	}
	

	getDryTime = (tempF, humidity, windspeed) => {
		const tempC = ((tempF - 32) * 5) / 9
		const tempK = tempC + 273.15
		const x = 21.07 - 5336 / tempK
		const delta = (Math.exp(x) * 5336) / (tempK * tempK)
		const lambda = 2.501 - 0.002361 * (tempK - 273)
		const gamma = (0.0016286 * 101.3) / lambda
		const d = (1 - humidity) * Math.exp(x)
		const rn = (340 * 30 * 60) / 1000000
		const e =
			(delta * rn + 6.43 * gamma * d * (1 + 0.536 * windspeed)) /
			(lambda * (delta + gamma))
		const rho = 1000
		const rhoe = (e * rho) / (1000 * 60 * 60 * 24)
		const mass = 0.075
		const surfaceArea = 0.75
		const t = mass / (rhoe * surfaceArea * 60)
		const hours = Math.ceil(t / 60)
		const minutes = Math.ceil(t % 60)
		const time = [hours, minutes]
		return time
	}

	render() {
		const insideTemp= Number(this.props.insideData[0].metric)
		const insideHumidity = Number(this.props.insideData[1].metric)
		const outsideTemp = Number(this.props.outsideData[0].metric)
		const outsideHumidity= Number(this.props.outsideData[1].metric)
		const windSpeed= Number(this.props.outsideData[2].metric)
		// const { insideTemp, insideHumidity } = this.state
		const realInsideHumidity = insideHumidity / 100
		// const { outsideTemp, outsideHumidity, windSpeed } = this.state
		const realOutsideHumidity = outsideHumidity / 100
		const insideDrytime = this.getDryTime(
			insideTemp,
			realInsideHumidity,
			0,
		)
		const outsideDrytime = this.getDryTime(
			outsideTemp,
			realOutsideHumidity,
			windSpeed,
		)

		// console.log(
		// 	`inside temp`,
		// 	insideTemp,
		// 	`inside humidity`,
		// 	realInsideHumidity,
		// )
		// console.log(`hello drytime`, insideDrytime)
		const insideInfo = this.props.insideData.map((data, i) => {
			return <EnvironmentMetrics key={i} name={data.name} metric={data.metric} qualifier={data.metric_qualifier}/>
		})
		const outsideInfo = this.props.outsideData.map((data, i) => {
			return <EnvironmentMetrics key={i} name={data.name} metric={data.metric} qualifier={data.metric_qualifier}/>
		})
		return (
			<>
			<Header />
			<section className='card-container'>
				<div className='dry-time-card dry-time-card-left'>
					<h2>Inside Drying</h2>
					<div className="info-items">
						{insideInfo}
					</div>
					{insideDrytime[1] === 47? null:<div className="dry-time-container-outer">
						<h3>Time to dry</h3>
						<div className="time-to-dry">
							<span>{insideDrytime[0]} Hours</span>
							<span>{insideDrytime[1]} Minutes</span>
						</div>
					</div>}
				</div>
				<div className='dry-time-card dry-time-card-right'>
					<h2>Outside Drying</h2>
					<div className="info-items">
						{outsideInfo}
					</div>
				{outsideDrytime[1] === 47 ? null:	<div className="dry-time-container-outer">
						<h3>Time to dry</h3>
						<div className="time-to-dry">
							 
								<span>
									{outsideDrytime[0]}{' '}
									{outsideDrytime[0] <= 1
										? 'Hour'
										: 'Hours'}
								</span>
							
							{outsideDrytime[1] === 2 ? null : (
								<span>
									{outsideDrytime[1]}{' '}
									{outsideDrytime[1] <= 1
										? 'Minute'
										: 'Minutes'}
								</span>
							)}
						</div>
					</div>}
				</div>
			</section>
			</>
		)
	}
}
