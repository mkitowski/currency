import React from "react";
import {StyledDiv} from "./StyledDiv";




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
      <StyledDiv bottom={'5%'}>
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
