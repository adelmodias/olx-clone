import styled from 'styled-components';

export const PageArea = styled.div `
    display: flex;
    margin-top: 20px;

    .leftSide {
        width: 250px;
        margin-right: 10px;
        padding-right: 20px;

        .filterName {
            font-size: 15px;
            margin: 10px 0;
        }

        input,
        select {
            width: 100%;
            height: 40px;
            background: white;
            border: 2px solid #9BB83C;
            border-radius: 5px;
            outline: 0;
            font-size: 15px;
            color: black;
            padding: 5px;
        }

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .categoryItem {
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 5px;
            color: black;
            cursor: pointer;
            transition: 0.2s all;

            &:hover,
            &.active {
                background-color: #9BB83C;
                color: white;
            }

            img {
                width: 25px;
                height: 25px;
                margin-right: 5px;
            }

            span {
                font-size: 15px;
            }
        }
    }

    .rightSide {
        flex: 1;

        h2 {
            margin-top: 0;
            font-size: 18px;
        }

        .listWarning {
            padding: 30px;
            text-align: center;
        }

        .list {
            display: flex;
            flex-wrap: wrap;
            
            .ad-item {
                width: 33%;
            }
        }

        .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px;

            .paginationItem {
                width: 30px;
                height: 30px;
                border: 1px solid black;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                margin-right: 5px;
                cursor: pointer;

                &:hover {
                    border: 1px solid #999;
                    background: #DDD;
                }

                &.active {
                    background: #CCC;
                }
            }
        }
    }
`;