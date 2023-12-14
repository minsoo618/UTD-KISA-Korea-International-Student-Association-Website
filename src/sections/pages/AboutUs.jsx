import { React } from 'react';
import logo from '../../images/logo.jpg';
import '../../App.css';
import './AboutUs.css';
import Chart from 'react-apexcharts';
import Timeline from './Timeline';


function AboutUs() {
    return (
        <div className="all">
            <div className="title">
                <h1 className="intro">Introducing KISA<hr></hr></h1>
                <div className="img">
                    <img src={logo} className="logo"></img>
                </div>
                <br></br><br></br><br></br>
                <p className="p"> Welcome to The University of Texas at Dallas (UTD)!
                    KISA is short for the Korean International Student Association. KISA is a student organization for Korean students and others interested in Korean culture.
                    <br></br>
                    The UTD Korean International Student Association will do its best to help you successfully study abroad.<br></br><br></br>
                </p>
                <hr></hr>
                <br></br>
            </div>
            <div className="list">
                <h2> History </h2>
                <Timeline />
                <br />
                <h2> Vision </h2>
                <p className="p1"> We ensure the preservation and growth of Korean American community at the University of Texas at Dallas by providing cultural and
                    professional development opportunities to those with a keen interest in the Korean culture.</p>
                <br />
                <hr></hr>
                <br></br><br></br>
            </div>
            <div className="section">
                <h1> Member Demographics </h1>
                <div className="Member">
                    <Chart
                        type='bar'
                        width={600}
                        height={500}
                        series={[
                            {
                                name: "Freshman",
                                data: [45]
                            },
                            {
                                name: "Sophomore",
                                data: [, 78]
                            },
                            {
                                name: "Junior",
                                data: [, , 96]
                            },
                            {
                                name: "Senior",
                                data: [, , , 48]
                            },
                            {
                                name: "Super-Senior",
                                data: [, , , , 32]
                            }
                        ]}

                        options={{
                            title: {
                                text: "Grade Distribution",
                                style: {
                                    fontSize: '25'
                                }
                            },
                            chart: {
                                stacked: true
                            },
                            xaxis: {
                                categories: ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Super-Senior']
                            }
                        }}
                    />
                    <br></br><br></br>
                </div>

                <div className="Major">
                    <Chart
                        type='donut'
                        width={600}
                        height={600}
                        series={[45, 67, 89, 34, 43]}

                        options={{
                            labels: ['Computer Science', 'Business', 'ATEC', 'Computer Engineering', 'Mathematics'],
                            title: {
                                text: "Top 5 Majors",
                                style: {
                                    fontSize: '25'
                                }
                            },

                            plotOptions: {
                                pie: {
                                    donut: {
                                        labels: {
                                            show: true,
                                            total: {
                                                show: true,
                                                fontSize: 30,
                                                color: '#f90000',
                                            }
                                        }
                                    }
                                }
                            },

                            dataLabels: {
                                enabled: true,
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}


export default AboutUs;