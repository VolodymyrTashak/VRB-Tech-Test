import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  gap: 20px;
`;
export const FormLabelImage = styled.label`
  display: block;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  margin-top: 30px;
  padding-bottom: 0.5rem;
  text-align: center;
  color: rgb(86, 86, 120);
  font-size: 1.3rem;
  text-transform: uppercase;
`;

export const FormLabelTitle = styled.label`
  // display: block;
  // margin-right: auto;
  // margin-left: auto;
  // font-size: 20px;
  // line-height: 1.2;
  // font-weight: 700;
  // margin-top: 30px;
  // padding-bottom: 0.5rem;
  // text-align: center;
  // color: rgb(86, 86, 120);
  // font-size: 1.3rem;
  // text-transform: uppercase;
  display: grid;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 200px;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  color: rgb(86, 86, 120);
`;
export const FormLabelDescription = styled.label`
// display: block;
// margin-right: auto;
// margin-left: auto;
// font-size: 20px;
// line-height: 1.2;
// font-weight: 700;
// margin-top: 30px;
// padding-bottom: 0.5rem;
// text-align: center;
// color: rgb(86, 86, 120);
// font-size: 1.3rem;
// text-transform: uppercase;
display: grid;
text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 200px;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 700;
  color: rgb(86, 86, 120);
`;

export const FormInputTitle = styled.input`
width: 200px;
height: 30px;
`;

export const FormInputDescription = styled.input`
width: 200px;
height: 45px;
`;

export const FormBtn = styled.button`
  font-size: 18px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 140px;
  cursor: pointer;

  text-decoration: none;
   box-shadow: 0 0 40px 40px #565678 inset, 0 0 0 0 #565678;
   font-weight: bold;
   letter-spacing: 2px;
   color: white;
   transition: 0.15s else-in-out;
  :hover {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
  &.active {
    color: #565678;
    box-shadow: 0 0 10px 0 #565678 inset, 0 0 10px 4px #565678;
  }
`;