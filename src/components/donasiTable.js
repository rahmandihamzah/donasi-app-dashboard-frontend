import React from 'react';
import {
    MDBDataTable,
} from 'mdbreact';

const DonaturTable = () => {
    const data = {
        columns: [
            {
                label: 'Jenis Donasi',
                field: 'jenisDonasi',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Nama Donatur',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Nominal',
                field: 'nominal',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Keterangan',
                field: 'keterangan',
                sort: 'asc',
                width: 250
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
                jenisDonasi: 'Zakat Umum',
                name: 'Donatur satu',
                nominal: 'Rp 123.456.789,-',
                keterangan: 'kosong',
                status: 'Pending',
                action:
                    <div className="table-action">
                        <a href="" data-toggle="modal" data-target="#detailDonasi"><i className="fas fa-eye"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                jenisDonasi: 'Zakat Umum',
                name: 'Donatur satu',
                nominal: 'Rp 123.456.789,-',
                keterangan: 'kosong',
                status: 'Pending',
                action:
                    <div className="table-action">
                        <a href="" data-toggle="modal" data-target="#detailDonasi"><i className="fas fa-eye"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                jenisDonasi: 'Infaq Umum',
                name: 'Donatur satu',
                nominal: 'Rp 123.456.789,-',
                keterangan: 'Lorem ipsum dolor sit amel',
                status: 'Berhasil',
                action:
                    <div className="table-action">
                        <a href="" data-toggle="modal" data-target="#detailDonasi"><i className="fas fa-eye"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                jenisDonasi: 'Infaq Umum',
                name: 'Donatur satu',
                nominal: 'Rp 123.456.789,-',
                keterangan: 'Lorem ipsum dolor sit amel',
                status: 'Pending',
                action:
                    <div className="table-action">
                        <a href="" data-toggle="modal" data-target="#detailDonasi"><i className="fas fa-eye"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                jenisDonasi: 'Infaq Umum',
                name: 'Donatur satu',
                nominal: 'Rp 123.456.789,-',
                keterangan: 'Lorem ipsum dolor sit amel',
                status: 'Berhasil',
                action:
                    <div className="table-action">
                        <a href="" data-toggle="modal" data-target="#detailDonasi"><i className="fas fa-eye"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                jenisDonasi: 'Baksos Umum',
                name: 'Donatur satu',
                nominal: 'Rp 123.456.789,-',
                keterangan: 'Lorem ipsum dolor sit amel',
                status: 'Pending',
                action:
                    <div className="table-action">
                        <a href="" data-toggle="modal" data-target="#detailDonasi"><i className="fas fa-eye"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                jenisDonasi: 'Baksos Umum',
                name: 'Donatur satu',
                nominal: 'Rp 123.456.789,-',
                keterangan: 'Lorem ipsum dolor sit amel',
                status: 'Pending',
                action:
                    <div className="table-action">
                        <a href="" data-toggle="modal" data-target="#detailDonasi"><i className="fas fa-eye"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                jenisDonasi: 'Zakat Umum',
                name: 'Donatur satu',
                nominal: 'Rp 123.456.789,-',
                keterangan: 'Lorem ipsum dolor sit amel',
                status: 'Pending',
                action:
                    <div className="table-action">
                        <a href="" data-toggle="modal" data-target="#detailDonasi"><i className="fas fa-eye"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
            {
                jenisDonasi: 'Baksos Umum',
                name: 'Donatur satu',
                nominal: 'Rp 123.456.789,-',
                keterangan: 'Lorem ipsum dolor sit amel',
                status: 'Berhasil',
                action:
                    <div className="table-action">
                        <a href="" data-toggle="modal" data-target="#detailDonasi"><i className="fas fa-eye"></i></a>
                        <a href=""><i className="fas fa-trash"></i></a>
                    </div>
            },
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

export default DonaturTable;