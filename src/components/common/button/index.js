import styled from 'react-emotion';

const Button = styled('button')`
  display: flex;
  height: 30px;
  padding: 0 20px;
  color: ${props => (props.primary ? '#0057B8' : '#fff')};
  border-radius: 100px;
  border: ${props => (props.primary ? '1px solid #0057B8' : '1px solid #3278C6')};
  background: ${props => (props.primary ? '#fff' : '#3278C6')};
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  outline: none;
  &:hover {
    background: ${props => (props.primary ? '#E5EEF7' : '#0057B8')};
    border: ${props => (props.primary ? '1px solid #0057B8' : '1px solid #0057B8')};
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #71c9f8;
  }
`;

export default Button;
