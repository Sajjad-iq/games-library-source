import styled from "styled-components";

interface Props {
    padding: string,
    flexDirection: string
    justify: string
    width: string
}

export const FlexSection = styled.section<Props>`
 width: ${(p) => p.width};
 height: fit-content ;
 display: flex;
 justify-content: flex-start;
 flex-direction: ${(p) => p.flexDirection};
 align-items: center;
 padding:${(p) => p.padding};
 justify-content:${(p) => p.justify} ;

`