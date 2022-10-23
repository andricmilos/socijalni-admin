import React from 'react';
import data from "../data.json"
import Table from '../Table';

function Test() {

    const getHeadings = () => {
        return Object.keys(data[0]);
    }

    return (<>
        <Table theadData={getHeadings()} tbodyData={data}/>
    </>);
}

export default Test;