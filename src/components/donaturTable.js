import React from 'react';
import {
    MDBDataTable,
} from 'mdbreact';

const DonasiTable = () => {
    const data = {
        columns: [
            {
                label: 'Nama Donatur',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'ID Donatur',
                field: 'id',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 150
            },
            {
                label: 'No. Telp',
                field: 'telp',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Status',
                field: 'status',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 100
            }
        ],
        rows: [
            {
                name: 'aaaaaaaaaaa',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action:
                    <div className="table-action">
                        <a href="/donaturEdit"><i className="fas fa-pen"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            }
        ]
    };

    return (
        <MDBDataTable
            scrollX
            scrollY
            maxHeight="80vh"
            striped
            bordered
            data={data}
        />
    );
}

export default DonasiTable;