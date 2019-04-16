import React from "react";
import StyledContainer from "../Styled/StyledContainer";
import RowRates from './RowRates';
import imgPath from '../../img/trev.gif';

const Rates = ({
								 currentRates, error
							 }) => {

	return (
		<StyledContainer>
			{!error ? <div><h3>Kursy walut:</h3>
				<div className={"row"}>
					<div className={"colHead"}></div>
					<div className={"colHead"}>Kupno</div>
					<div className={"colHead"}>Sprzedaż</div>
				</div>
				{currentRates.map((el, i) => {
					return (
						<RowRates key={el.code + i} code={el.code} bid={el.bid} ask={el.ask}/>
					);
				})}</div> : <div>
				<h3>Coś nam nie wyszło</h3>
				<p>Zgubiliśmy kursy walut :(</p>
				<img src={imgPath} width={'40%'} alt={'tev is looking for current rates'}/>
			</div>

			}
		</StyledContainer>
	);

}

export default Rates