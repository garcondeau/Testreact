import styled from "styled-components";

const inputStyleTemplate = () => {
  return `
    padding: 10px 5px 2px;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    background: transparent;
    border: none;
    -webkit-appearance: none;
    transition: all .3s ease;
    border-bottom: 1px solid #152d35;
    border-radius: 2px;
    
    &::placeholder {
      font-family: Montserrat, sans-serif;
      font-size: 18px
      font-weight: 600;
      color: rgba(214, 212, 212, 1);
    }
    
    /*&:-webkit-autofill {
      -webkit-box-shadow: inset 0 0 0 50px black;
      -webkit-text-fill-color: blue;
    }*/
    
    &:read-only {
      color: gray;
    }
    
    &:read-only:focus{
      box-shadow: none;
      background-color: transparent;
    }
  `;
};

export const StyledInputGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  ${({type}) => type === 'hidden' && `
    height: 0;
    margin: 0 !important;
    visibility: hidden;
    opacity: 0;
  `};
`;

export const StyledLabel = styled.label`
  padding-bottom: 3px;
  color: #656565;
  font-size: 12px;
  text-align: left;
`;

export const StyledTextarea = styled.textarea`
  height: 125px;
  font-family: inherit;
  resize: none;
  border: none;
  outline: none;
  ${inputStyleTemplate}
`

export const StyledInput = styled.input`
  ${inputStyleTemplate}
`;

export const StyledDelayInput = styled.div`
  input {
    font-family: inherit;
    ${inputStyleTemplate}
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
  ${({error}) =>
  error && `input, textarea {
      color: #f44336;
    }`
};
`;

export const StyledPasswordEye = styled.span`
  margin: 0;
  padding: 0;
  color: #656565;
  font-size: 20px;
  position: absolute;
  bottom: 14px;
  right: 16px;
  cursor: pointer;
  opacity: 0.55;
  &:hover {
    opacity: 1;
  }
`;

export const StyledError = styled.div`
  padding: 0 0 3px 22px;
  color: #f44336;
  font-size: 12px;
  text-align: left;
`;

export const StyledSkeletonInput = styled.div`
  width: 100%;
  height: 49px;
  padding: 10px 12px;
  background-color: transparent;
  border: 1px solid #9DA6B6;
  border-radius: 5px;
  & > div {
    margin: 0;
  }
`;