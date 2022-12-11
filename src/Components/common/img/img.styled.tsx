import styled from "styled-components";

interface Props {
    height: string,
    width: string,
}

export const IMG = styled.img<Props>`
 width: ${(p) => p.width};
 height: ${(p) => p.height} ;
 border-radius: 8px;
`