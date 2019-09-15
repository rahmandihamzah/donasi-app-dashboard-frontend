import React from 'react';
import {
    MDBDataTable,
} from 'mdbreact';

const DonaturTable = () => {
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
                width: 150
            }
        ],
        rows: [
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            },
            {
                name: 'Nama Donatur Satu',
                id: 'ID-201112345',
                email: 'donatursatu@yourmail.com',
                telp: '+6212345678910',
                status: 'Reguler',
                action: 'edit, delete'
            }
        ]
    };

    return (
        <MDBDataTable
            scrollX
            scrollY
            maxHeight="300px"
            striped
            bordered
            data={data}
        />
    );
}

export default DonaturTable;