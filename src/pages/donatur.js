import React, { Component } from 'react';
// import postscribe from 'postscribe';
// import Script from 'react-load-script';
// import ScriptTag from 'react-script-tag';
// import Typekit from 'typekit';

//MDB table
import { MDBDataTable } from 'mdbreact';

//components
import Sidebar from '../components/sidebar';
// import Header from '../components/header';
import DonaturTable from '../components/donaturTable';

//styles
import '../styles/donatur.css';

class Donatur extends Component {

    componentDidMount() {
        document.body.style.background = "#142d4c";

        // const script = document.createElement("script");

        // script.src = "../script/searchTableDonatur";
        // script.async = true;

        // document.body.appendChild(script);

        //table scroll start
        // window.onload = function () {
        //     var tableCont = document.querySelector('#table-donatur');

        //     function scrollHandle(e) {
        //         var scrollTop = this.scrollTop;
        //         this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
        //         // this.querySelector('thead').style.top = '${scrollTop}px';
        //     }

        //     tableCont.addEventListener('scroll', scrollHandle)
        // }
        //table scroll end
    }

    render() {
        // var postscribe = require('postscribe');
        // postscribe(<script language="javascript" src="../script/searchTableDonatur.js"></script>')
        return (
            < div >
                <div className="row m-0">
                    {/* <Header /> */}
                    <Sidebar />
                    {/* <div className="dashboard-content-container col-12 col-sm-9 col-md-10">
                        <div className="report-table-donatur-container col-12 my-5">
                        <DonaturTable />
                        </div>
                    </div> */}


                    <div className="dashboard-content-container col-12 col-sm-9 col-md-10">
                        <div className="report-table-donatur-container col-12 my-4">


                            {/* <ScriptTag isHydrating={true} type="text/javascript" src="../script/searchTableDonatur" /> */}

                            <input type="text" id="search-donatur" onKeyUp="searchTableDonatur()" placeholder="Search name.." />
                            <table className="table table-hover table-donatur" id="table-donatur">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col" className="table-content-center">No.</th>
                                        <th scope="col" className="table-content-center">Nama Donatur</th>
                                        <th scope="col" className="table-content-center">ID Donatur</th>
                                        <th scope="col" className="table-content-center">Email</th>
                                        <th scope="col" className="table-content-center">No. Telp</th>
                                        <th scope="col" className="table-content-center">Status</th>
                                        <th scope="col" colSpan="2" className="table-content-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>aaaaaa</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="table-content-center">1</th>
                                        <td>Nama Donatur Satu</td>
                                        <td className="table-content-center">ID-201112345</td>
                                        <td className="table-content-center">donatursatu@yourmail.com</td>
                                        <td className="table-content-center">+6212345678910</td>
                                        <td className="table-content-center">Regular</td>
                                        <td className="table-content-center pr-0"><i className="fas fa-pen"></i></td>
                                        <td className="table-content-center pl-0"><i className="fas fa-trash"></i></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Donatur;