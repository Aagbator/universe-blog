import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostPageWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 5rem 0 5rem;
`;

export const DarkButton = styled(Link)`
    display: inline-block;
    text-decoration: none;
    margin-top: 1rem;
    border-radius:.3rem;
    color: #ffffff;
    background-color: #444444;
    padding: .5rem;
`;
