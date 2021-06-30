import React from 'react';


class CurDate extends React.Component {
  
        state = {
            curDate: new  Date().toLocaleString().slice(0, 8)
    }
    render() {
        return (
            <p>{this.state.curDate}</p>
        )
    }

}

export default CurDate;