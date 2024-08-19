import React from 'react';
import '../../styles/our-members.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import imgDylan from '../../../public/all-images/image-home/imgDylan.jpg';
import imgMario from '../../../public/all-images/image-home/imgMario.png';
import imgJuan from '../../../public/all-images/image-home/imgJuan.png';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const OUR_MEMBERS = [
    {
        name: 'Dylan Torres',
        experience: 'Web Developer',
        imgUrl: imgDylan,
        fbUrl: 'https://www.facebook.com/dylan.torres.g.28?mibextid=ZbWKwL',
        igUrl: 'https://www.instagram.com/dylan_torres28?utm_source=qr&igsh=b3RpY3F6ZWJ3cTdl',

    },
    {
        name: 'Mario Brenes',
        imgUrl: imgMario,
        experience: 'Web Developer',
        fbUrl: '#',
        igUrl: '#',

    },
    {
        name: 'Juan Pablo',
        imgUrl: imgJuan,
        experience: 'Web Developer',
        fbUrl: '#',
        igUrl: '#',
    },

];

const OurMembers = () => {
    return (
        <>
            {OUR_MEMBERS.map((item, index) => (
                <Col lg='2' md='3' sm='3' xs='6' key={index} className='mb-4 '>
                    <div className="single_member">
                        <div className="single_member-img">
                            <img src={item.imgUrl} alt="" className='w-100 ' />
                            <div className="single_member-social">
                                <Link target="_blank" to={item.fbUrl}>
                                    <i>
                                        <FacebookIcon />
                                    </i>

                                </Link>

                                <Link  target="_blank" to={item.igUrl}>
                                    <i>
                                        <InstagramIcon />
                                    </i>

                                </Link>
                            </div>
                        </div>
                        <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                        <p className="section_description text-center">
                            {item.experience}
                        </p>
                    </div>
                </Col>
            ))}
        </>
    );
};

export default OurMembers;