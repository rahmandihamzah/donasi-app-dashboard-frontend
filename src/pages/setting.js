import React, { Component } from 'react';

//components
import Sidebar from '../components/sidebar';
import BurgerNav from '../components/burgerNav';

//styles
import '../styles/setting.css';

class Setting extends Component {

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
                        <div className="setting-container my-5">
                            <form action="">
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <label For="inputNotificationServerId">Notification Server ID</label>
                                        <input type="text" className="form-control" id="inputNotificationServerId" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-12">
                                        <label For="inputNotificationRestKey">Notification Rest Key</label>
                                        <input type="text" className="form-control" id="inputNotificationRestKey" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark float-right">Simpan Pengaturan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Setting;