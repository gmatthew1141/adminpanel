import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './App.css';

export class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            custs:[],
            columns:[{
                dataField: 'customer_id',
                text: 'Customer ID'
            },
            {
                dataField: 'firstname',
                text: 'First Name'
            },
            {
                dataField: 'lastname',
                text: 'Last Name'
            },
            {
                dataField: 'email',
                text: 'Email'
            }]

        }
    }

    refreshData() {
        fetch("/getAllCustomers")
        .then((res) => res.json())
        .then((data) => this.setState({custs:JSON.parse(data.text)}));
    }

    componentDidMount() {
        this.refreshData();
    }

    render() {
        const rowClick = {
            onClick: (e, row, rowIndex) => {
                console.log("row: " + row.customer_id);
                localStorage.setItem('firstname', row.firstname);
                localStorage.setItem('lastname', row.lastname);
                localStorage.setItem('email', row.email);
                window.location.href += `accounts/${row.customer_id}`
            }
        };

        return (
            <div className="container cust-table-container">
                <h3 className="m-2 d-flex justify-content-left">Customer list</h3>
                <BootstrapTable striped 
                    hover 
                    keyField='customer_id' 
                    data={this.state.custs} 
                    columns={this.state.columns}
                    rowEvents={rowClick}/>
            </div>
        )
    }
}
