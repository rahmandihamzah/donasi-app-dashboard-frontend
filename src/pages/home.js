import React, { Component } from 'react';

//components
import Sidebar from '../components/sidebar';
import BurgerNav from '../components/burgerNav';
import Chart from '../components/chart';

//styles
import '../styles/home.css';

class Home extends Component {

    componentWillMount() {
        document.body.style.background = "#142d4c";
    }

    render() {
        return (
            <div>
                <div className="row m-0">
                    {/* <Header /> */}
                    <Sidebar />
                    <div className="dashboard-content-container col-12 col-md-10 h-auto min-vh-100">
                        <BurgerNav />

                        <div className="action-container mt-3">
                            <a href="#">
                                <button className="btn-download button btn-group">Download Report</button>
                            </a>
                        </div>
                        <div className="report-card-container d-flex flex-column flex-md-row my-5 mx-auto">
                            <div className="report-card col-12 col-sm-10 col-md-4 my-2 my-md-0 mx-auto mx-md-1">
                                <div className="card-title ml-2 mt-2 mb-5">
                                    <p className="title">Total Donasi</p>
                                    <p className="title-description">Jumlah Donasi Keseluruhan</p>
                                </div>
                                <div className="nominal-report my-4">
                                    <p className="nominal-report-content">Rp.123.456.789,-</p>
                                </div>
                            </div>
                            <div className="report-card col-12 col-sm-10 col-md-4 my-2 my-md-0 mx-auto mx-md-1">
                                <div className="card-title ml-2 mt-2 mb-5">
                                    <p className="title">Hari ini</p>
                                    <p className="title-description">Jumlah Donasi Hari ini</p>
                                </div>
                                <div className="nominal-report my-4">
                                    <p className="nominal-report-content">Rp.456.789,-</p>
                                </div>
                            </div>
                            <div className="report-card col-12 col-sm-10 col-md-4 my-2 my-md-0 mx-auto mx-md-1">
                                <div className="card-title ml-2 mt-2 mb-5">
                                    <p className="title">Donatur</p>
                                    <p className="title-description">Total Donatur Terdaftar</p>
                                </div>
                                <div className="nominal-report my-4">
                                    <p className="nominal-report-content">789</p>
                                </div>
                            </div>
                        </div>
                        <div className="statistic-chart-container col-12 mx-auto">
                            <Chart />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home;