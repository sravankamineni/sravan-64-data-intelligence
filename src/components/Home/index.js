import React, { useState } from 'react';
import { FaRegCalendar } from "react-icons/fa";
import { MdAccessTime, MdNotificationsNone } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'

import "./index.css"
// import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";

const companyLogosData = [
    {
        id: "d14af630-5d22-4bfb-85dd-bb507b139b82",
        company_logo_url:
            "https://res.cloudinary.com/dnmcjyigq/image/upload/v1704014973/samples/landscapes/nature-mountains.jpg",
        title:"Nature of Plains",
        desc:"The market capitalisation of Iridian stocks crossed US$45 trillion in january"
    },
    {
        id: "0a932287-8002-4fc8-95d1-8cbed3224e37",
        company_logo_url:
            "https://res.cloudinary.com/dnmcjyigq/image/upload/v1704014975/samples/landscapes/landscape-panorama.jpg"
        ,
        title: "Nature of Plains",
        desc: "The market capitalisation of Iridian stocks crossed US$45 trillion in january"
},
    {
        id: "8211ce0c-d7dc-4d2b-8468-5e48ad9ae985",
        company_logo_url:
            "https://res.cloudinary.com/dnmcjyigq/image/upload/v1704014965/samples/landscapes/girl-urban-view.jpg"
        ,
        title: "Nature of Plains",
        desc: "The market capitalisation of Iridian stocks crossed US$45 trillion in january"
},
    {
        id: "daa48153-3f16-4797-8469-5d63c9cba938",
        company_logo_url:
            "https://res.cloudinary.com/dnmcjyigq/image/upload/v1704014963/samples/animals/reindeer.jpg"
        ,
        title: "Nature of Plains",
        desc: "The market capitalisation of Iridian stocks crossed US$45 trillion in january"
},
    {
        id: "2f4b518e-29b3-45c3-a7a5-80929f7898d9",
        company_logo_url:
            "https://res.cloudinary.com/dnmcjyigq/image/upload/v1704014962/samples/food/dessert.jpg"
        ,
        title: "Nature of Plains",
        desc: "The market capitalisation of Iridian stocks crossed US$45 trillion in january"
},
    {
        id: "895b9b4d-a283-4ee1-9fb8-933a3c4b449c",
        company_logo_url:
            "https://res.cloudinary.com/dnmcjyigq/image/upload/v1704014961/samples/ecommerce/analog-classic.jpg"
        ,
        title: "Nature of Plains",
        desc: "The market capitalisation of Iridian stocks crossed US$45 trillion in january"
},
    {
        id: "a8c67fd0-bab9-46ec-95de-cbfa2e3473f6",
        company_logo_url:
            "https://res.cloudinary.com/dnmcjyigq/image/upload/v1704014964/samples/sheep.jpg"
        ,
        title: "Nature of Plains",
        desc: "The market capitalisation of Iridian stocks crossed US$45 trillion in january"
}
];



const Home = () => {

    const [isView, setIsView] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        
    };
    return (
        <div className="home-cont">
            <div className="home-top">
                <div className="greet">
                    <h1 className="greet-head">Good Morning, Sravan</h1>
                    <p className="greet-para">You are subscribed to Retail plan.</p>
                </div>
                <div className="date-time">
                    <div className="date">
                        <FaRegCalendar className="icon" size={20} />
                        <p className="date-desc">Today, 14 Febraury</p>
                    </div>

                    <div className="time">
                        <MdAccessTime className="icon" size={20} />
                        <p className="time-desc">16:42</p>
                    </div>
                    <MdNotificationsNone size={25}/>



                </div>


            </div>

            <div className="home-mid">
                <div className="cards-cont">

                    <div className="card-item">
                        <BsCardText size={30} color="blue" />
                        <p className="card-head">My Saved Library 1</p>
                        <p className='card-month'>04-5-2022</p>
                    </div>


                    <div className="card-item">
                        <BsCardText size={30} color="purple" />
                        <p className="card-head">My Saved Library 2</p>
                        <p className='card-month'>14-10-2023</p>
                    </div>



                    <div className="card-item">
                        <BsCardText size={30} color="red" />
                        <p className="card-head">My Saved Library 3</p>
                        <p className='card-month'>11-11-2023</p>
                    </div>




                    <div className="card-item">
                        <BsCardText size={30} color="orange" />
                        <p className="card-head">My Saved Library 4</p>
                        <p className='card-month'>11-01-2024</p>
                    </div>

                    <div className="card-item">
                        <BsCardText size={30} color="green" />
                        <p className="card-head">My Saved Library 5</p>
                        <p className='card-month'>14-04-2024</p>
                    </div>

                </div>



                <div className="home-btm">
                    <div className="home-slide">
                        <div className="slick-container">
                            <Slider  {...settings}>
                                {companyLogosData.map((eachLogo) => {
                                    const { id, company_logo_url, title, desc } = eachLogo;
                                    return (
                                        <div className="slick-item" key={id}>
                                            <img
                                                className="logo-image"
                                                src={company_logo_url}
                                                alt="company logo"
                                            />
                                            <h1 className='card-tle'>{title}</h1>
                                            <p className='card-info'>{desc}</p>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                       
                        
                        
                        
                        
                        
                        {isView && <Slider className="slider-2" style={{ marginTop: "55px" }} {...settings}>
                            {companyLogosData.map((eachLogo) => {
                                const { id, company_logo_url } = eachLogo;
                                return (
                                    <div className="slick-item" key={id}>
                                        <img
                                            className="logo-image"
                                            src={company_logo_url}
                                            alt="company logo"
                                        />
                                    </div>
                                );
                            })}
                        </Slider>}
                      
                        <button className='view-btn' onClick={() => setIsView(!isView)}>
                            {isView ? <p>View Less</p> : <p>View More</p> }
                        </button>

                    </div>

                    
                   






                    <div className="timeline-cont">
                        <div className="timeline-top">
                            <h1 className="time-top-head">Recent Releases</h1>
                            <select className="select-input">
                                <option>India</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <hr style={{color:"#eaeaea"}}/>



                        <div className="timeline-cards">
                            <div className="card">
                                <div className="card-r">
                                    <button className="circle">.</button>
                                    <div class="vl"></div>
                                </div>
                                <div className="card-l">
                                    <p className="card-time">Febraury 12, 2024</p>
                                    <h3 className="card-name">Industrial Production</h3>
                                    <p>Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% Yor growth in the same month last year</p>
                                </div>


                            </div>

                            <div className="card">
                                <div className="card-r">
                                    <button className="circle">.</button>
                                    <div class="vl"></div>
                                </div>
                                <div className="card-l">
                                    <p className="card-time">Febraury 12, 2024</p>
                                    <h3 className="card-name">Industrial Production</h3>
                                    <p>Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% Yor growth in the same month last year</p>
                                </div>


                            </div>


                        </div>




                    </div>

                </div>
            </div>
           
            
        </div>
    )


}

export default Home