import styled from 'styled-components'

export const Wrap = styled.div`
   overflow: hidden;
   min-width: ${(props) => props.$minWidth || '100%'};
`
export const Container = styled.div`
   width: 100%;
   height: 100vh;
   margin: 0 auto;
   background-color: white;
   overflow-y: auto;
`
export const Input = styled.input`
   width: 100%;
   border: none;
   border-radius: 20px;
   height: ${(props) => props.$height || '30px'};
   font-size: 1.2rem;
   padding: 0 40px;
   font-weight: 800;
   color: rgb(94, 94, 94);
`
