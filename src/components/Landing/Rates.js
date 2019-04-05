import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
  width: 35%;
  max-width: 300px;
  height: 250px;
  position: absolute;
  bottom: 5%;
  left: 5%;
  background-color: white;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 5px;
  .row {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    .col {
      width: 30%;
      border-bottom: 1px solid gray;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .colHead {
      width: 30%;
      font-weight: 800;
    }
  }
`;

const RowRates = props => {
  return (
    <div key={props.code} className={"row"}>
      <div className={"col"}>{props.code}</div>
      <div className={"col"}>
        {props.bid}
      </div>
      <div className={"col"}>
        {props.ask}
      </div>
    </div>
  )
}

export default class Rates extends React.Component {


  render() {

    return (
      <StyledDiv>
        <h3>Kursy walut:</h3>
        <div className={"row"}>
          <div className={"colHead"}> </div>
          <div className={"colHead"}>Kupno</div>
          <div className={"colHead"}>Sprzedaż</div>
        </div>
        {this.props.currentRates.map((el,i) => {
          return (
            <RowRates key={el.code+i} code={el.code} bid={el.bid} ask={el.ask}/>
          );
        })}
      </StyledDiv>
    );
  }
}
