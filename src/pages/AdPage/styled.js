import styled from 'styled-components';

export const Fake = styled.div `
    background-color: #DDD;
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div `
    display: flex;
    margin-top: 20px;

    .box {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 4px #999;
        margin-bottom: 20px;

        &--padding {
            padding: 10px;
        }
    }

    .leftSide {
        flex: 1;
        margin-right: 20px;

        .box {
            display: flex;
        }

        .adImage {
            width: 320px;
            height: 320px;
            margin-right: 20px;

            .each-slide img {
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 320px;
            }
        }

        .adInfo {
            flex: 1;

            .adName {
                margin-bottom: 20px;

                h2 {
                    margin-bottom: 0;
                }

                small {
                    color: #999;
                }
            }

            .adDescription {
                small {
                    color: #999;
                }
            }
        }
    }

    .rightSide {
        width: 250px;

        .adPrice span {
            color: #0000FF;
            display: block;
            font-size: 27px;
            font-weight: bold;
        }

        .contactSellerLink {
            background-color: #0000FF;
            color: white;
            height: 30px;
            border-radius: 5px;
            box-shadow: 0 0 4px #999;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            margin-bottom: 20px;
        }

        .adCreatedBy {
            small {
                display: block;
                color: #999;
                margin-top: 5px;
            }
        }
    }
`;

export const RelatedArea = styled.div`
    h2 {
        font-size: 20px;
    }

    .relatedProducts {
        display: flex;
        flex-wrap: wrap;

        .ad-item {
            width: 25%;
        }
    }
`;

export const BreadCrumb = styled.div`
    font-size: 13px;
    margin-top: 20px;

    a {
        display: inline-block;
        margin: 0 5px;
        text-decoration: underline;
        color: black;
    }
`;