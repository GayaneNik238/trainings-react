import './App.css';
import React from "react";
import Cryptotracker from './cryptotracker';
import TableHead from './tableHead';
import InputSection from './inputSection';
import Table from './table';


function Container() {
    return(
        <div className="container">
            <InputSection />
            <Cryptotracker />
            <TableHead />
            <Table />


        </div>
    )
}

export default Container;