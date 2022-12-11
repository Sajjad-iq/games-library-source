import styled from "styled-components";

interface Props {
  height: string,
  width: string,
  padding: string,
  flexDirection: string
}

export const Wrapper = styled.section<Props>`
 width: ${(p) => p.width};
 height: ${(p) => p.height} ;
 display: flex;
  justify-content: space-around;
 flex-direction: ${(p) => p.flexDirection};
 align-items: center;
 padding:${(p) => p.padding};
 flex-wrap: wrap;

`