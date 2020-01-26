import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import { PageContainer } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';

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
    });

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    });

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdsList(json.ads);
        }
        getRecentAds();
    });

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
                    ...
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Home;