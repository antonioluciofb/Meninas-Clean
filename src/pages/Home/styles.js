import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgba(31, 56, 204, 0.1);
    width: auto;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;

    header {
      margin: 20px;
      width: 90%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        display: flex;
        align-items: center;

          img {
          width: 120px;
          margin-top: 20px;
        }

        p {
          margin-top: 3px;
          margin-left: -5px;
          font-size: 22px;
          font-weight: 700;
        }
      }
      

      span {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #E52B2B;

        color: #fff;
        font-weight: 700;
        font-size: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 25px;
        right: -10px;
      }
    }


    input {
    
      margin-top: 10px;  
      width: 90%;
      font-size: 18px;
      font-weight: 400;
      height: 40px;
      border-radius: 5px;
      border: 0;
      text-align: center;
      padding-left: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.40);
      font-family: "Balsamiq Sans", sans-serif;
    }

    footer {
      margin-top: 30px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 10px 0;
      background: rgba(8, 14, 51, 1);

      svg {
        margin-right: 20px;
      }
    }
`;

export const Title = styled.h1`

  margin-top: 35px;
  margin-left: 20px;

  align-self: flex-start;
  font-size: 18px;
  font-weight: 700;
  color: #000;

  display: flex;
  align-items: center;

  svg {
    margin-left: 8px;
  }
`

export const Menu = styled.div`

  margin-top: 15px;
  width: 100%;
  height: 200px;
  display: flex;
  overflow-x: scroll;
 

`

export const Product = styled.div`
  width: 150px;
  height: 185px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);

  margin: 0 10px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;

  img {
    width: 70px;
    height: 70px;
    border-radius: 10%;
    margin: 10px 0 15px;
  }

  p {
    text-align: center;
    width: 140%;
    font-weight: 600;
  }

  p, strong {
    font-size: 10px;
    color: #000;
    margin-bottom: 5px;
  }

`
export const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 10px;


  border-radius: 4px;
  width: 80%;
  padding: 4px 0;

  border: 0;
  outline: 0;

  background: #2039CC;

  font-size: 10px;
  font-weight: 700;
  color: #fff;

  svg {
    margin-right: 8px;
  }
`

export const Contact = styled.div`
  margin-left: 20px;

  p, strong {
    font-size: 12px;
    color: #fff;
    margin-top: 6px;
  }

`