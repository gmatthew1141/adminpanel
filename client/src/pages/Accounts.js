import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import './App.css';

function Accounts() {
    const custId = useParams();

    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch(`/getAccounts/${custId.customerid}`)
            .then((res) => res.json())
            .then((data) => setData(data.text));
            
    }, [custId.customerid])

    let acc = JSON.parse(data);
    
    const column = [{
        dataField: 'account_name',
        text: 'Account Name'
    },
    {
        dataField: 'contest_id',
        text: 'Contest ID'
    }]

    return (
        <div>
            <div className="container">
                <h1 className="m-2 d-flex justify-content-center border-bottom">Customer Details</h1>
                <div className="d-flex flex-column align-items-center text-center">
                    <h4 className="font-weight-bold">{localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</h4>
                    <span className="text-black-50">{localStorage.getItem('email')}</span>  
                </div>
                
                <h3 className="m-2 d-flex justify-content-left">Accounts</h3>
                {!data ? "No accounts exist for this customer." : <BootstrapTable
                    striped
                    keyField='account_name'
                    data={acc}
                    columns={column}/>}
            </div>
        </div>
    )
}

export default Accounts 