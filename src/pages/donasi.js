import React, { Component } from 'react';

//components
import Sidebar from '../components/sidebar';
import BurgerNav from '../components/burgerNav';
import DonasiTable from '../components/donasiTable';

//styles
import '../styles/donasi.css';

class Donasi extends Component {

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
                        <div className="report-table-container col-12 my-5">
                            <DonasiTable />

                            {/* Modal */}
                            <div className="modal fade" id="detailDonasi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Detail Donasi</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body detailDonasi-content">
                                            <table className="table-borderless">
                                                <tr>
                                                    <td>ID Transaksi</td>
                                                    <td>:</td>
                                                    <td>ID-1234567</td>
                                                </tr>
                                                <tr>
                                                    <td>Nama Donatur</td>
                                                    <td>:</td>
                                                    <td>Donatur Satu</td>
                                                </tr>
                                                <tr>
                                                    <td>Jenis Donasi</td>
                                                    <td>:</td>
                                                    <td>Wakaf Umum</td>
                                                </tr>
                                                <tr>
                                                    <td>Nominal Donasi</td>
                                                    <td>:</td>
                                                    <td>Rp 456.789,-</td>
                                                </tr>
                                                <tr>
                                                    <td>Keterangan</td>
                                                    <td>:</td>
                                                    <td>Untuk pembangunan yayasan yatim piatu di desa mana kecamatan mana kabupaten manasaja</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Donasi;