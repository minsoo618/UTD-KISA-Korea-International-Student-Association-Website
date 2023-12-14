import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Faculties.css'
import dayun from '../../images/dayun.jpg';
import bokyung from '../../images/bokyung.jpg';
import juhee from '../../images/juhee.jpg';
import yujin from '../../images/yujin.jpg';
import junseo from '../../images/junseo.jpg';
import geon from '../../images/geon.jpg';



function Faculties() {
    {/* change in img, need linkedin links and about from everyone */}
    const [cards] = useState([
        {
            image: <img className="img1" src={bokyung} alt= ' '  />,
            title: 'Bokyung Suh',
            job: 'Linked In',
            about: 'President / Electrical Engineering',
            linked_in: <Button href= "https://www.linkedin.com/in/bokyung-suh-07931422b/" target="_blank" rel="noreferrer noopener" circular color='linkedin' icon='linkedin' />
                
        },
        {
            image: <img className="img1" src={dayun} alt=' ' />,
            title: 'Dayun Kang',
            job: 'Linked In',
            about: 'Vice President / Visual Art',
            linked_in: <Button href= "https://www.linkedin.com/in/jihyung-park-9618a2247/" target="_blank" rel="noreferrer noopener" circular color='linkedin' icon='linkedin' />
        },
        {
            image: <img className="img1" src={juhee} alt=' '  />,
            title: 'Joanne Park',
            job: 'Linked In',
            about: 'Committee / Business Administration Concentration',
            linked_in: <Button href= "https://www.linkedin.com/in/joanne-park-93520b264" target="_blank" rel="noreferrer noopener" circular color='linkedin' icon='linkedin' />
        },
        {
            image: <img className="img1" src={yujin} alt=' ' />,
            title: 'Yujin Lee',
            job: 'Linked In',
            about: 'Treasurer / Healthcare Studies',
            linked_in: <Button href= "https://www.linkedin.com/in/jihyung-park-9618a2247/" target="_blank" rel="noreferrer noopener" circular color='linkedin' icon='linkedin' />
        },
        {
            image: <img className="img1" src={junseo} alt=' ' />,
            title: 'Junseo Jung',
            job: 'Linked In',
            about: 'Secretary / Biology',
            linked_in: <Button href= "https://www.linkedin.com/in/jihyung-park-9618a2247/" target="_blank" rel="noreferrer noopener" circular color='linkedin' icon='linkedin' />
        },
        {
            image: <img className="img1" src={geon} alt=' ' />,
            title: 'Geon Kim',
            job: 'Linked In',
            about: 'Web Master / Computer Engineering',
            linked_in: <Button href= "https://www.linkedin.com/in/jihyung-park-9618a2247/" target="_blank" rel="noreferrer noopener" circular color='linkedin' icon='linkedin' />
        },
    ])


    
    return (
        <div>
                <section>
                    <div className="container">
                        <h1> 2022 - 2023 Executive Officers </h1>
                    </div>
                    <div className="cards">
                        {
                            cards.map((card, i) => (
                                <div key={i} className="card">
                                    <image className="img1">
                                        {card.image}
                                    </image>
                                    <h3>
                                        {card.title}
                                    </h3>
                                    <p>
                                        {card.about}
                                    </p>
                                    <div>
                                        {card.linked_in}
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </section>
            </div>
    )
}

export default Faculties;