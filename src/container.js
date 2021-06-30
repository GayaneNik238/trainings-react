import './App.css';
import React from "react";
import Cryptotracker from './cryptotracker';
import TableHead from './tableHead';
import InputSection from './inputSection';
import Table from './table';
import Heading from './Heading';


function Container() {
    return(
        <div className="container">
            <InputSection />
            <Heading />
            <Table />
        </div>
    )
}

export default Container;