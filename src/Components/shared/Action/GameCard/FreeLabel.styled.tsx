import styled from "styled-components";

interface Props {
  color: string
  FontSize: string
}

export const Label = styled.p<Props>`
  font-size: ${(p) => p.FontSize};
  font-weight:600 ;
  padding: 5px 10px;
  background-color: gray;
  color:${(p) => p.color};
  border-radius: 8px;
  white-space: nowrap;
`