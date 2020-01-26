import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/adItem';

const Home = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adsList, setAdsList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdsList(json.ads);
        }
        getRecentAds();
    }, []);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                                {stateList.map((item, index) => <option key={index} value={item.name}>{item.name}</option>)}
                            </select>
                            <button>Pesquisa</button>
                        </form>
                    </div>

                    <div className="categoryList">
                        {categories.map((item, index) =>
                            <Link key={index} to={`/ads?cat=${item.slug}`} className="categoryItem">
                                <img src={item.img} alt={item.name} />
                                <span>{item.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>

            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>

                    <div className="list">
                        {adsList.map((item, index) =>
                            <AdItem key={index} data={item} />
                        )}
                    </div>

                    <Link to="/ads" className="viewAllAds">Ver todos</Link>

                    <hr />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut itaque debitis ad officia perferendis est quo consequatur eveniet quis, adipisci eos laboriosam error labore assumenda nesciunt, illo impedit ipsam necessitatibus?</p>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Home;