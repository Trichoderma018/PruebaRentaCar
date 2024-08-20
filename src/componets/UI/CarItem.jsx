import React from 'react'
import { Col } from "reactstrap"
import { Link } from "react-router-dom";
import '../../styles/car-item.css'

const CarItem = (props) => {
    const { imgUrl, model, marca, transmision, price } = props.item

    return (
        <Col lg='4' md='4' sm='6' className='mb-5'>

            < div className="car_item" >
                <div className="car_img">
                    <img src={imgUrl} alt="" className='w-100' />
                </div>

                <div className="car_item-content mt-4">
                    <h4 className="section_title text-center">{marca}</h4>
                    <h6 className="rent_pricetext-center mt-">${price}.00
                        <span>/Day</span></h6>

                    <div className="car_item-info d-flex aling-items-center 
            justify-content-between mt-3 mb-4">
                        <span className="d-flex aling-items-center gap-1"> {model}</span>
                        <span className="d-flex aling-items-center gap-1"> {transmision}</span>
                    </div>
                    <button className="w-50 car_item-btn car_btn-rent">
                        <Link to={`/cars/${marca}`}>Rent</Link>
                    </button>

                    <button className="w-50 car_item-btn car_btn-details">
                        <Link to={`/CarDetail/${marca}`} >Details</Link>
                    </button>
                </div>
            </div >
        </Col >
    );
};

export default CarItem;

