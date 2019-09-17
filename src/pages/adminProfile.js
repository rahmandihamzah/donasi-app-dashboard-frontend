import React, { Component } from 'react';

//components
import Sidebar from '../components/sidebar';
import BurgerNav from '../components/burgerNav';

//styles
import '../styles/adminProfile.css';

class AdminProfile extends Component {

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
                        <div className="profileForm-container col-10 col-md-3 my-4">
                            <div className="profilePic-container">
                                <div className="profilePic rounded-circle d-flex justify-content-center">
                                    <i className="fas fa-user fa-6x py-3 px-3 pic"></i>
                                </div>
                                <div className="adminName"></div>
                            </div>
                            <div className="profileIdentity-container col-12 col-md-9">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminProfile;