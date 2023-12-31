import React, { useState } from "react";
import "./PaymentPage.css";
import courses from "../../images/pointer1icon.png";
import timer from "../../images/pointer2icon.png";
import live from "../../images/pointer3icon.png";
import scholarship from "../../images/pointer4icon.png";
import ads from "../../images/pointer5icon.png";
import one from "../../images/Icon1.png";
import two from "../../images/Icon2.png";
import Razorpay from "../../images/RazorpayIcon.png"
import IconClock from "../../images/IconClock2.png";
import { GrRadialSelected } from 'react-icons/gr';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdRadioButtonUnchecked } from 'react-icons/md';

function PaymentPage() {
    const [select, setSelect] = useState({
        12: true,
        6: false,
        3: false,
    })
    const [value, setValue] = useState(179)
    const [discount, setDiscount] = useState(18401)
    const [total, setTotal] = useState(value + (18500 - discount));
    return (
        <>
            <div className="pricing_section">
                <div className="content_container">
                    <div className="main_heading">
                        <h1 className="heading">
                            Access curated courses worth <br /><span className='cross-line'>₹ 18,500</span> at just <span className='blue'>₹99</span> per year!
                        </h1>
                    </div>

                    <div className="content_wrap">
                        <div className="content_line">
                            <img className="left_icons" src={courses} alt="" />
                            <p className="left_lines"><span className='blue'>100+</span> Job relevant courses </p>
                        </div>

                        <div className="content_line">
                            <img className="left_icons" src={timer} alt="" />
                            <p className="left_lines"><span className='blue'>20,000+</span> Hours of content </p>
                        </div>

                        <div className="content_line">
                            <img className="left_icons" src={live} alt="" />
                            <p className="left_lines"><span className='blue'>Exclusive</span> webinar access</p>
                        </div>

                        <div className="content_line">
                            <img className="left_icons" src={scholarship} alt="" />
                            <p className="left_lines">Scholarship worth <span className='blue'>₹94,500</span></p>
                        </div>

                        <div className="content_line">
                            <img className="left_icons" src={ads} alt="" />
                            <p className="left_lines"><span className='blue'>Ad Free</span> learning experience</p>
                        </div>
                    </div>
                </div>

                <div className="payment_plan_container">
                    <div className="payment_plan_card">
                        <div className="signup_subscribe">
                            <div className="onetwo_div">
                                <img className="onetwo_img" src={one} alt="" />
                                <p className="oneTwoP" style={{ fontSize: '14px' }} >Sign Up</p>
                            </div>

                            <div className="onetwo_div">
                                <img className="onetwo_img" src={two} alt="" />
                                <p className="oneTwoP" style={{ fontSize: '14px' }} >Subscribe</p>
                            </div>
                        </div>

                        <div style={{ margin: '10px 0px' }} >
                            <h2 className="payment_title">Select your subcription plan</h2>
                        </div>

                        <div style={{ maxHeight: '308px', margin: '0px 20px' }}>
                            <div className="month_card month_expired" style={{ marginBottom: '12px', color: '#BEBEBE', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '55px' }}>
                                <div className="month_radio_div" >
                                    <p className='offer-expired'><span className="ex-rc-text"  style={{ fontSize: '10px', fontWeight: '600', }} >Offer expired</span></p>
                                    <p className="months_p" style={{ paddingTop: '3px', paddingLeft: '4px' }} >
                                        <GrRadialSelected size={20} className='select-icons' /> 
                                        <span style={{ fontSize: '14px', fontWeight: '600' }} >12 Months Subscription</span>
                                    </p>
                                </div>

                                <div className="pricing_div">
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '6px', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className="total_price" style={{ fontSize: '12px' }} >Total </p>
                                        <p className="total_price" style={{ fontSize: '16px' }}>₹ 99</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className="total_month">₹ 8 </p>
                                        <p className="total_month">/mo</p>
                                    </div>
                                </div>
                            </div>


                            <div className={`month_card month_recommended ${select[12] ? 'subscription2' : 'subscription'}`} style={{ marginBottom: '12px' }} onClick={() => {
                                setSelect({
                                    12: true,
                                    6: false,
                                    3: false
                                })
                                setTotal(0)

                                setValue(179);
                                setDiscount(18401)
                                setTotal(value + (18500 - discount))
                            }}>
                                <div className="month_radio_div">
                                    <p className='offer-recommended'><span className="ex-rc-text" style={{ fontSize: '10px', fontWeight: '600' }}>Recommended</span></p>
                                    <p className="months_p">
                                        <div className={` ${select[12] ? 'checkFill' : 'checkEmpty'}`} style={{ paddingTop: '3px', justifyContent: 'center', alignItems: 'center' }} >
                                            {select[12] ? <BsCheckCircleFill size={20} /> : <MdRadioButtonUnchecked size={20} />}
                                        </div>
                                        <span style={{ paddingLeft: '8px', fontSize: '14px', fontWeight: '600' }} >12 Months Subscription</span>
                                    </p>
                                </div>

                                <div className="pricing_div">
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '6px', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className="total_price" style={{ fontSize: '12px' }} >Total </p>
                                        <p className="total_price" style={{ fontSize: '16px' }}>₹ 179</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className="total_month">₹ 8 </p>
                                        <p className="total_month">/mo</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`month_card ${select[6] ? 'subscription2' : 'subscription'}`} style={{ marginBottom: '12px' }} onClick={() => {
                                setSelect({
                                    12: false,
                                    6: true,
                                    3: false
                                })
                                setTotal(0)

                                setValue(149);
                                setDiscount(18301)
                                setTotal(value + (18500 - discount))


                            }}>
                                <div className="month_radio_div months-input-part">
                                    <div className={` ${select[6] ? 'checkFill' : 'checkEmpty'}`} style={{ paddingTop: '6px', justifyContent: 'center', alignItems: 'center' }} >
                                        {select[6] ? <BsCheckCircleFill size={20} /> : <MdRadioButtonUnchecked size={20} />}
                                    </div>
                                    <span style={{ paddingLeft: '8px', fontSize: '14px', fontWeight: '600' }} >6 Months Subscription</span>
                                </div>

                                <div className="pricing_div">
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '6px', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className="total_price" style={{ fontSize: '12px' }} >Total </p>
                                        <p className="total_price" style={{ fontSize: '16px' }}>₹ 149</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className="total_month">₹ 8 </p>
                                        <p className="total_month">/mo</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`month_card ${select[3] ? 'subscription2' : 'subscription'}`} onClick={() => {
                                setSelect({
                                    12: false,
                                    6: false,
                                    3: true
                                })
                                setTotal(0)
                                setValue(199);
                                setDiscount(18201)
                                setTotal(value + (18500 - discount))
                            }}>
                                <div className="month_radio_div months-input-part">
                                    <div className={` ${select[3] ? 'checkFill' : 'checkEmpty'}`} style={{ paddingTop: '6px', justifyContent: 'center', alignItems: 'center' }} >
                                        {select[3] ? <BsCheckCircleFill size={20} /> : <MdRadioButtonUnchecked size={20} />}
                                    </div>
                                    <span style={{ paddingLeft: '8px', fontSize: '14px', fontWeight: '600' }} >3 Months Subscription</span>
                                </div>

                                <div className="pricing_div">
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '6px', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className="total_price" style={{ fontSize: '12px' }} >Total </p>
                                        <p className="total_price" style={{ fontSize: '16px' }}>₹ 99</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className="total_month">₹ 8 </p>
                                        <p className="total_month">/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="subscription_fee_div">
                            <p className="subscription_fee">Subscription Fee</p>
                            <p className="subscription_price" style={{ fontSize: '14px', color: '#3C4852' }} ><span className="black">₹18,500</span></p>
                        </div>

                        <div className="limited_time_div">
                            <div className="limited_time_text_side">
                                <p className="limited_time_offer" style={{ fontSize: '14px' }} >Limited time offer</p>

                                <div className="limited_time_text_div2">
                                    <img className="timer_img" src={IconClock} alt="timer" />
                                    <p className="limited_time_date" style={{ fontSize: '12px' }}>
                                        Offer valid till 25th March 2023
                                    </p>
                                </div>
                            </div>

                            <div className="limited_time_price_side">
                                <p className="limited_time_price"><span className="black" style={{ fontSize: '14px' }} >- ₹{discount}</span></p>
                            </div>

                        </div>

                        <div className="total_fee_div">
                            <p className="total_fee" style={{ fontSize: '14px' }}><span className="black" style={{ fontSize: '14px' }} >Total</span> (Incl. of 18% GST)</p>
                            <p className="total_price"><span className="black" style={{ fontSize: '22px' }} >₹{total}</span></p>
                        </div>
                        <div className="btn-container">
                            <button className="cancel-btn">CANCEL</button>
                            <button className="pay-btn">PROCEED TO PAY</button>
                        </div>
                        <img src={Razorpay} className='razorpay-logo' alt="logo" />

                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentPage;