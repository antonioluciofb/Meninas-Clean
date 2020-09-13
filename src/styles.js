import styled from 'styled-components';

export const Container = styled.div`
    background-color: #EAECFF; 
    max-width: 960px;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    img {
      width: 80px;
      margin-top: 20px;
    }

    input {
    
      margin-top: 30px;  
      font-family: Arial, Helvetica, sans-serif;  
      width: 80%;
      height: 40px;
      border-radius: 5px;
      border: 0;
      text-align: center;
      padding-left: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.40);
    }
`;
