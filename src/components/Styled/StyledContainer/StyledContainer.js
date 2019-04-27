import styled from 'styled-components';

const StyledContainer = styled.div`
  min-width: 300px;
  min-height: 250px;
  position: absolute;
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  left: 5%;
  background-color: rgba(250, 250, 250, 0.8);
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 5px;
  padding-bottom: 20px;
  .bold {
    font-weight: 600;
  }
  .row {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;

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
  .accounts {
    border-radius: 6px;
    border: solid 1px gray;
    background: white;
    width: 80%;
    margin: 0 auto 5px;
    padding: 0;
    p {
      border-bottom: solid 1px gray;
      margin: 0;
      padding: 2px 0;
      span {
        font-weight: 600;
      }
      :last-child {
        border-bottom: none;
      }
    }
  }

  ul {
    list-style: none;
    background: white;
    padding: 0;
    border-radius: 6px;
    margin: 0 5px;
    border: solid 1px gray;
    li {
      padding: 5px 15px;
      border-bottom: solid 1px gray;
      transition: background-color 0.3s linear, font-weight 0.3s linear;
      display: flex;
      :last-child {
        border-bottom: none;
      }
      .head {
        font-weight: 600;
      }
      .col2 {
        width: 20%;
        min-width: 120px;
      }
    }
  }
`;

export default StyledContainer;
