import styled from "styled-components";

interface Props {
    FontSize: string
    FontWeight: string
}

export const P = styled.p<Props>`
  font-size: ${(p) => p.FontSize};
  font-weight:${(p) => p.FontWeight} ;
`