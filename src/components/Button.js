import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#000D1A' : '#CD853F')};
`