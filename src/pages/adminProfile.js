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
                        <div className="profileForm-container d-flex flex-column flex-md-row align-items-center align-items-md-start col-12 my-4">
                            <div className="profilePic-container d-flex flex-column align-items-center rounded pt-3 col-10 col-sm-6 col-md-3 h-auto mr-md-3 mb-3 mb-md-0">
                                <div className="profilePic rounded-circle d-flex justify-content-center">
                                    <i className="fas fa-user fa-6x py-3 px-3 pic"></i>
                                </div>
                                <div className="adminName d-flex flex-column align-items-center">
                                    <p className="admin-name">Administrator</p>
                                    <p>admin@youremail.com</p>
                                </div>
                            </div>


                            <div className="profileIdentity-container rounded col-12 col-md-9">
                                <form action="">
                                    <p className="form-subTitle">Personal Detail</p>
                                    <div className="form-row ml-4">
                                        <div className="form-group col-12">
                                            <label For="inputName">Full Name</label>
                                            <input type="text" className="form-control" id="inputName" placeholder="Nama Donatur" />
                                        </div>
                                        <div className="form-group col-12">
                                            <label for="inputEmail">Email</label>
                                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                        </div>
                                        <div className="form-group col-12">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-group col-12">
                                            <label>Profile Photo</label>
                                            <div className="input-group mb-3">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="uploadProfilePic" />
                                                    <label className="custom-file-label" for="uploadProfilePic" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                                </div>
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="form-subTitle">Login Detail</p>
                                    <div className="form-row ml-4">
                                        <div className="form-group col-12">
                                            <label For="inputUserName">Username</label>
                                            <input type="text" className="form-control" id="inputUserName" placeholder="Username" />
                                        </div>
                                        <div className="form-group col-12">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-dark btn-save float-right">Simpan Setelan</button>
                                </form>
                                <table></table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default AdminProfile;