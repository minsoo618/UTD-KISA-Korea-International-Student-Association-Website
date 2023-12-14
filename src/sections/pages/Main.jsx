/*
    ����ȭ��. ����ȭ�鿡 �߰� �ϰ� ������ ����ٰ� �ϸ� ��. ���� �ٵ�(�����̵�)�� calendar �� �־�����̤�
 */

import React from 'react';
import SliderData from './SliderData';
import Body from './Body';
import { Calendar } from 'react-big-calendar';
import Calendar1 from './Calendar1';
import Bottom from './Bottom';
import Navbar1 from '../Navbar/Navbar1'
import "./Main.css";

function Main() {
    return (

        <div id='main' className="main">
            
            <div className='header-heading'>
                {/*���� ȭ�鿡 �����̵�*/}
                
                <Body slides={SliderData} className="slide" />;

                <section class="features" id="features">
                    <h1 class="heading"> Our <span>Features</span> </h1>
                    <div class="box-container">
                        <div class="box">
                             <img src={require("../../images/image1.jpg")} height={200} width={200} />
                            <h3>About us</h3>
                            <p> Welcome to UTD KISA!</p>
                            <a href="http://localhost:3000/AboutUs" class="btn">read more</a>
                        </div>
                        <div class="box">
                            <img src={require("../../images/image1.jpg")} height={200} width={200} />
                            <h3>Faculties</h3>
                            <p> Welcome to UTD KISA!</p>
                            <a href="http://localhost:3000/Faculties" class="btn">read more</a>

                        </div>
                        <div class="box">
                            <img src={require("../../images/image2.jpg")} height={200} width={200} />
                            <h3>Event</h3>
                            <p> Welcome to UTD KISA!</p>
                            <a href="http://localhost:3000/Events" class="btn">read more</a>
                        </div>
                        <div class="box">
                            <img src={require("../../images/image3.jpg")} height={200} width={200} />
                            <h3>Source</h3>
                            <p> Welcome to UTD KISA!</p>
                            <a href="http://localhost:3000/Source" class="btn">read more</a>
                        </div>
                    </div>
                </section>
                <div class="titleCalendar">
                    KISA Calendar
                </div>
                <Calendar1 className='calendar'/>

            </div>
            <Bottom />
        </div>


    )
}

export default Main;