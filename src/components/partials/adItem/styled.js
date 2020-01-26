import styled from 'styled-components';

export const Item = styled.div`
    a {
        display: block;
        border: 1px solid #FFF;
        margin: 10px;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        color: black;
        background: #fff;
        transition: 0.4s all ease;
        box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);

        &:hover {
            border: 1px solid #CCC;
        }

        .ad-image {
            width: 100%;
            border-radius: 5px;
        }

        .ad-name {
            font-weight: bold;
        }
    }
`;