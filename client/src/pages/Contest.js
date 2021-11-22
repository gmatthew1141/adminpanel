import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './App.css';

function Contest() {

    const [data, setData] = useState(null);
    const [account, setAccount] = useState(null);

    const contestMap = new Map();

    useEffect(() => {
        fetch("/getAllContests")
            .then((res) => res.json())
            .then((data) => setData(data.text))
    }, [])

    useEffect(() => {
        fetch("/getAllAccounts")
            .then((res) => res.json())
            .then((data) => setAccount(data.text));
            
    }, [])

    let contests = JSON.parse(data);
    let accounts = JSON.parse(account);

    
    if (contests) {
        contests.forEach(contest => {
            let contestInfo = {
                contest_name: contest.contest_name,
                count: 0
            };
            contestMap.set(contest.contest_id, contestInfo);
        });
        if (accounts) {
            accounts.forEach(account => {
                let contestInfo = contestMap.get(account.contest_id);
                
                contestInfo.count += 1;
                
                contestMap.set(account.contest_id, contestInfo);
            
            })
        }
    }


    const column = [{
        dataField: 'contest_name',
        text: 'Contest Name'
    },
    {
        dataField: 'count',
        text: 'Count'
    }]

    let contestArr = [];

    contestMap.forEach((value, key, map) => contestArr.push(value));

    return (
        <div className="container">
            <h3 className="m-2 d-flex justify-content-left">Contest list</h3>
            <BootstrapTable
                striped
                keyField="contest_name"
                data={contestArr}
                columns={column}/>
        </div>
    )
}

export default Contest
