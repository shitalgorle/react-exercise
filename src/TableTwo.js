import React from "react";
import "./TableTwo.css";

class TableTwo extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {tableOf: 1};
      
  }

  renderCell = (tableOf,number) => {
    return (
    <div className="row">
        <button className="cell-button" style={{backgroundColor:"lightblue", fontWeight:"bold"}}>{tableOf}</button>
        <text className="multi">{"x"}</text>
        <button className="cell-button" style={{backgroundColor:"lightblue", fontWeight:"bold"}}>{number}</button>
        <text className="multi">{"="}</text>
        <button className="cell-button" style={{backgroundColor:"lightyellow", fontWeight:"bold"}}>{tableOf * number}</button>
    </div>
    );
  };
  renderTable = () => {
    let i = 1;
    let tableCellArray = [];
    while (i <= 10){
        tableCellArray.push(this.renderCell(this.state.tableOf,i));

        i++;
    }
    return tableCellArray;
  };
  renderTableOf = () =>{
    let i = 1;
    let array = [];
    while (i <= 10){
        let index = i;
        let ui =(
            <button className="cell-button" style={{backgroundColor:"green",fontWeight:"bold"}}
                onClick={() =>{
                    this.buttonClicked(index);
                    
                }}
                >
                    {index}
        </button> 
        );
        array.push(ui);
        i++;

            }
      return <div className="row">{array}</div>;
            };
            buttonClicked = (index) => {
            console.log("INDEX ==",index);
            this.setState({tableOf: index});
            };

     render() {
    return (
      <div className="table">
        {this.renderTableOf()}
        {this.renderTable()}
      </div>
    );

  }
}
export default TableTwo;