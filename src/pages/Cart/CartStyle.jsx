import styled from 'styled-components';
import { Cont, IR } from 'styles/GlobalStyles';

export const H2IR = styled.h2`
  ${IR}
`;

export const ContCart = styled.div`
  ${Cont}
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1.4rem;
  }
`;

export const TxtPageTitle = styled.p`
  font-size: 2rem !important;
  font-weight: 500;
  padding: 50px;
`;

export const ContInfoTitle = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  background-color: var(--light-grey);
`;

export const AllCheckBox = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 2px solid var(--point);
  border-radius: 50px;
  &:checked {
    width: 15px;
    height: 15px;
    background-color: var(--point);
    border-radius: 50px;
  }
`;

export const BtnAllDelete = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-bottom: 10px;
  float: right;
`;

export const ContOrder = styled.div`
  width: 70%;
  height: 100px;
  background-color: var(--light-grey);
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContCartItems = styled.div`
  width: 100%;
`;

export const ContTxt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TxtTitle = styled.p`
  font-size: 1.2rem;
  padding-bottom: 10px;
`;

export const TxtPrice = styled.p`
  font-size: 1.8rem !important;
  font-weight: 500;
`;

export const TxtTotalPrice = styled.p`
  font-size: 2rem !important;
  font-weight: 500;
  color: var(--main);
`;

export const TxtSymbol = styled.p`
  background-color: white;
  padding: 8px 10px;
  border-radius: 50%;
  color: var(--sub-grey);
`;

export const BtnOrder = styled.button`
  width: 220px;
  height: 68px;
  margin-top: 30px;
  font-size: 1.8rem !important;
  border-radius: 5px;
  color: white;
  background-color: var(--main);
`;

// 아이템이 없는 경우
export const ContNoItems = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
