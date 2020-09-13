import styled from 'styled-components';

export const Container = styled.div`
    background-color: #EAECFF; 
    max-width: 960px;
    height: 100%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;


      img {
        width: 80px;
        margin-top: 20px;
      }

      span {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #E52B2B;

        color: #fff;
        font-weight: bold;
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
    
      margin-top: 30px;  
      font-family: Arial, Helvetica, sans-serif;  
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: 0;
      text-align: center;
      padding-left: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.40);
    }

    
`;

export const Title = styled.h1`

  margin-top: 35px;

  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;
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
  height: 175px;
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
    border-radius: 50%;
    margin: 10px 0 15px;
  }

  p {
    text-align: center;
    width: 100%;
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

  border-radius: 4px;
  width: 120%;
  padding: 4px 0;

  border: 0;
  outline: 0;

  background: #1898F4;

  font-size: 10px;
  font-weight: bold;
  color: #fff;

  svg {
    margin-right: 8px;
  }
`