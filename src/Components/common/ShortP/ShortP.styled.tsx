import styled from "styled-components";

interface Props {

}

export const ShortP = styled.p<Props>`
  width:90%;
  font-size: 1.2rem;
  font-weight:500 ;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin:5px 0 ;
`