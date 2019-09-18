import React, { Component } from 'react';

//components
import Sidebar from '../components/sidebar';
import BurgerNav from '../components/burgerNav';

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
                    <div className="dashboard-content-container col-12 col-md-10 h-auto min-vh-100">
                        <BurgerNav />
                        <div className="notification-send-container my-5">
                            <form action="">
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <input type="text" className="form-control" id="inputJudul" placeholder="Judul" />
                                    </div>
                                </div>
                                <div className="form-group col-12 px-0">
                                    <select id="inputState" className="form-control">
                                        <option selected>Semua Donatur</option>
                                        <option>Donatur Satu</option>
                                        <option>Donatur Dua</option>
                                        <option>Donatur Tiga</option>
                                        <option>Donatur Empat</option>
                                        <option>Donatur Lima</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <textarea className="form-control" rows="10" id="inputIsiPesan" placeholder="Isi Pesan" />
                                    </div>
                                </div>
                                <div className="form-group col-12 px-0">
                                    <div className="input-group mb-3">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="uploadProfilePic" />
                                            <label className="custom-file-label" for="uploadProfilePic" aria-describedby="uploadFile">Gambar</label>
                                        </div>
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="uploadFile">Upload</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <input type="text" className="form-control" id="inputLink" placeholder="Link" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark float-right">Kirim Notifikasi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notifikasi;