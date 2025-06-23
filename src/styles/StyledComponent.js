import styled from 'styled-components'

export const Wrap = styled.div`
   overflow: hidden;
   min-width: ${(props) => props.$minWidth || '1200px'};
`
export const Container = styled.div`
   max-width: 1200px;
   margin: 0 auto;
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
