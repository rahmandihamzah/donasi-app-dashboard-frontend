import React, { Component } from 'react';

//components
import Sidebar from '../components/sidebar';
import Header from '../components/header';

//styles
import '../styles/notifikasi.css';

class Notifikasi extends Component {

    componentWillMount() {
        document.body.style.background = "#142d4c";
    }

    render() {
        return (
            <div>
                <div className="row m-0">
                    {/* <Header /> */}
                    <Sidebar />
                    <div className="dashboard-notifikasi-content-container col-12 col-sm-9 col-md-10">
                    </div>
                </div>
            </div>
        )
    }
}

export default Notifikasi;