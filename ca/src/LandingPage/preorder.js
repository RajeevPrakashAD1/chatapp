import React from 'react';
import img from './images/preorderImages.svg';
import itemimg1 from './images/preorderImages2.svg';
import itemimg2 from './images/blacksmall.svg';
import './preorder.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function PreOrder() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<React.Fragment>
			<section>
				{' '}
				{/*<nav class="navbar navbar-light bg-light justify-content-between">
                                      <a class="navbar-brand">Navbar</a>
                                      <form class="form-inline">
                                       
                                      </form>
                                    </nav>*/}{' '}
				<div class="main">
					<Link to="/">
						<button class="btn btn-default btn-back" type="button">
							Back{' '}
						</button>{' '}
					</Link>{' '}
					<div class="container">
						<div class="signup-content">
							<div class="signup-img">
								<Slider {...settings}>
									<div>
										<img src={img} />{' '}
									</div>
									<div>
										<img src={img} />{' '}
									</div>
									<div>
										<img src={img} />{' '}
									</div>{' '}
								</Slider>{' '}
							</div>
							<div class="signup-form">
								<form method="POST" class="register-form" id="register-form">
									<h2 className="preorderHeading">
										Complete your pre - order <br />
										<span>
											Pre - book your product now at 99 / -only and avail a discount of flat 25 %
											on MRP{' '}
										</span>{' '}
									</h2>{' '}
									<p> 1. Your basic information </p>{' '}
									<div class="form-row">
										<div class="form-group">
											<label for="name"> First Name: </label>{' '}
											<input type="text" name="name" id="name" required />
										</div>
										<div class="form-group">
											<label for="father_name"> Last Name: </label>{' '}
											<input type="text" name="father_name" id="father_name" required />
										</div>{' '}
									</div>
									<div class="form-row">
										<div class="form-group">
											<label for="tel"> Mobile: </label>{' '}
											<input type="tel" name="tel" id="tel" required />
										</div>
										<div class="form-group">
											<label for="email"> Email: </label>{' '}
											<input type="text" name="email" id="email" required />
										</div>{' '}
									</div>{' '}
									<p> 2. Choose your product varient </p>{' '}
									<div class="form-radio">
										<div className="item-choose">
											<div class="form-radio-item">
												<input type="radio" name="item" id="item1" checked />
												<label for="item1" className="item-label">
													<p>
														Black <br />
														<span> MRP₹ 6999 / -Pre - book at₹ 99 only </span>{' '}
													</p>{' '}
													<img className="itemimg" src={itemimg2} />{' '}
												</label>

												<span class="check" />
											</div>{' '}
										</div>{' '}
										<div className="item-choose">
											<div class="form-radio-item">
												<input type="radio" name="item" id="item2" />
												<label for="item2" className="item-label">
													<p>
														White <br />
														<span> MRP₹ 6999 / -Pre - book at₹ 99 only </span>{' '}
													</p>{' '}
													<img className="itemimg" src={itemimg1} />{' '}
												</label>

												<span class="check" />
											</div>{' '}
										</div>{' '}
									</div>{' '}
									<p> 3. Residential Address </p>{' '}
									<div class="form-row">
										<div class="form-group">
											<label for="HouseNo."> House No.: </label>{' '}
											<input type="HouseNo." name="HouseNo." id="HouseNo." required />
										</div>
										<div class="form-group">
											<label for="strret"> street / colony / Area: </label>{' '}
											<input type="text" name="strret" id="strret" required />
										</div>{' '}
									</div>
									<div class="form-row">
										<div class="form-group">
											<label for="city"> city: </label>{' '}
											<input type="city" name="city" id="city" required />
										</div>
										<div class="form-group">
											<label for="state"> state: </label>{' '}
											<input type="text" name="state" id="state" required />
										</div>{' '}
									</div>
									<div class="form-row">
										<div class="form-group">
											<label for="pincode"> pin Code </label>{' '}
											<input type="text" name="pincode" id="pincode" />
										</div>{' '}
									</div>{' '}
									<p> 4. Continue to payment </p>{' '}
									<div className="payment-div">
										<h4> Pre - book Charges₹ 99 </h4> <p> Continue to payment </p>
										<div className="btn-div">
											<button class="btn btn-default btn-submit" type="submit">
												PRE - BOOK AIROCO{' '}
											</button>{' '}
										</div>{' '}
									</div>{' '}
								</form>{' '}
							</div>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</section>{' '}
		</React.Fragment>
	);
}

export default PreOrder;
