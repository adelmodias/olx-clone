import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import useApi from '../../helpers/OlxAPI';

import AdItem from '../../components/partials/adItem';
import { PageContainer } from '../../components/MainComponents';
import { PageArea, Fake, RelatedArea, BreadCrumb } from './styled';

const AdPage = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(() => {
        const getAdInfo = async (adId) => {
            const json = await api.getAdInfo(adId, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    }, []);

    const formatDate = (date) => {
        let cDate = new Date(date);

        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    return (
        <PageContainer>
            {adInfo.category && 
                <BreadCrumb>
                    Você está aqui: 
                    <Link to="./">Home</Link>
                    /
                    <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                    /
                    <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
                    / {adInfo.title}
                </BreadCrumb>
            }

            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={300} />}
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((image, index) =>
                                        <div className="each-slide" key={index}>
                                            <img src={image} alt="" />
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>

                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20} />}
                                {adInfo.title && 
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated && 
                                    <small>Data de publicação: {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>

                            <div className="adDescription">
                                {loading && <Fake height={100} />}
                                {adInfo.description}

                                <hr />

                                {adInfo.views && 
                                    <small>Anúncio visualizado {adInfo.views} vezes.</small>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake height={20} />}
                        {adInfo.priceNegotiable &&
                            "Preço Negociável"
                        }
                        {!adInfo.priceNegotiable && adInfo.price &&
                            <div className="adPrice">
                                Preço: <span>R$ {adInfo.price}</span>
                            </div>
                        }
                    </div>

                    {loading && <Fake height={50} />}
                    {adInfo.userInfo &&
                        <>
                        <a href={`mailto:${adInfo.userInfo.email}`} className="contactSellerLink" target="_blank">Falar com o Vendedor</a>
                        
                        <div className="adCreatedBy box box--padding">
                            {loading && <Fake height={50} />}
                            Criado por: <strong>{adInfo.userInfo.name}</strong>
                            <small>E-mail: {adInfo.userInfo.email}</small>
                            <small>Estado: {adInfo.stateName}</small>
                        </div>
                        </>
                    }
                </div>
            </PageArea>
            
            <RelatedArea>
                {adInfo.others &&
                    <>
                        <h2>Outras ofertas do vendedor</h2>

                        <div className="relatedProducts">
                            {adInfo.others.map( (item, index) =>
                                <AdItem key={index} data={item} />
                            )}
                        </div>
                    </>
                }
            </RelatedArea>
        </PageContainer>
    );
}

export default AdPage;