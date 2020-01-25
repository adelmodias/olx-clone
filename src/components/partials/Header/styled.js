import styled from "styled-components";

export const HeaderArea = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #CCC;
    
    .container {
        max-width: 1140px;
        margin: auto;
        display: flex;
    }

    a {
        text-decoration: none;
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        min-height: 60px;

        .logo-1,
        .logo-2,
        .logo-3 {
            font-size: 27px;
            font-weight: bold;
        }

        .logo-1 { color: #FF0000 };
        .logo-2 { color: #00FF00 };
        .logo-3 { color: #0000FF };
    }

    nav {
        padding-top: 10px;
        padding-bottom: 10px;

        ul,
        li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }

        li {
            margin-left: 20px;
            margin-right: 20px;

            a,
            button {
                color: black;
                font-size: 14px;
                transition: 0.3s all;
                border: none;
                background: transparent;
                cursor: pointer;
                outline: none;

                &:hover {
                    color: #333;
                    opacity: 0.9;
                }

                &.button {
                    background-color: #FF8100;
                    border-radius: 4px;
                    color: white;
                    padding: 5px 10px;

                    &:hover {
                        background-color: #E57706;
                    }
                }
            }
        }
    }
`;