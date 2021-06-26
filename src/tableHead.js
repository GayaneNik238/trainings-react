import './tableHead.css';
import { RiArrowDownSLine } from "react-icons/ri";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


function TableHead() {
    let tableMenu = [
        {tableMenuItem: 'cryptocurrencies'},
        {tableMenuItem: 'exchanges'},
        {tableMenuItem: 'favorites'},
        {tableMenuItem: 'defi'},
        {tableMenuItem: 'heatmap'}
    ]
    return(
        <div className="tableMenuNav">
            {
                tableMenu.map((tableMenuNav) => {
                    return <div className="tableMenuItem">
                        <a href="#" >{tableMenuNav.tableMenuItem}</a>
                    </div>
                })
            }
            <div className="table-right">
                <span className="down-arrow">Rows per page: 20<RiArrowDownSLine /></span>
                <IoIosArrowDropleftCircle />
                <IoIosArrowDroprightCircle />
            </div>
        </div>
        
    )



}
export default TableHead;