import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

//components
import Sidebar from '../components/sidebar';
import BurgerNav from '../components/burgerNav';

//styles
import '../styles/donaturEdit.css';

//datepicker style
import "react-datepicker/dist/react-datepicker.css";

class DonaturEdit extends Component {

    state = {
        startDate: new Date()
    };

    componentWillMount() {
        document.body.style.background = "#142d4c";
    };

    render() {
        return (
            <div>
                <div className="row m-0">
                    {/* <Header /> */}
                    <Sidebar />
                    <div className="dashboard-content-container col-12 col-md-10 h-auto min-vh-100">
                        <BurgerNav />
                        <div className="form-donatur-edit my-5">
                            <a href="/donatur">
                                <i className="fas fa-arrow-alt-circle-left fa-2x mb-3 mb-md-5 icon-back"></i>
                            </a>
                            <form action="">
                                <div className="form-row">
                                    <div className="form-group col-12 col-md-6">
                                        <label For="inputName">Nama Donatur</label>
                                        <input type="text" className="form-control" id="inputName" placeholder="Nama Donatur" />
                                    </div>
                                    <div className="form-group col-12">
                                        <label for="inputAddress">Alamat</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Alamat Lengkap" />
                                    </div>
                                    <div className="form-group col-12 col-md-6 d-flex flex-column">
                                        <label For="inputBirtday">Tanggal Lahir</label>
                                        <div className="datePicker-container p-0 col-6">
                                            <DatePicker
                                                id="inputBirtday"
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                                className="datepicker"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label For="inputPhone">Nomor Telepon</label>
                                        <input type="text" className="form-control" id="inputPhone" placeholder="Nomor Telepon" />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label for="inputEmail">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-12 col-sm-4">
                                        <label for="inputState">Status Donatur</label>
                                        <select id="inputState" className="form-control">
                                            <option selected>Choose...</option>
                                            <option>Regular</option>
                                            <option>Premium</option>
                                            <option>Inactive</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label For="inputBankName">Nama bank</label>
                                        <input type="text" className="form-control" id="inputBankName" placeholder="Nama Bank" />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label For="inputRek">Nomor Rekening</label>
                                        <input type="text" className="form-control" id="inputRek" placeholder="Nomor Rekening" />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label For="inputRekName">Nama Pemilik Rekening</label>
                                        <input type="text" className="form-control" id="inputRekName" placeholder="Nama Pemilik Rekening" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark float-right">Simpan Setelan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DonaturEdit;