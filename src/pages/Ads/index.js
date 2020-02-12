import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/adItem';

const Ads = () => {
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
        <PageContainer>
            <PageArea>
                <div className="leftSide">
                    <form method="GET">
                        <input type="text" name="q" placeholder="O que você procura?" />
                        
                        <div className="filterName">Estado:</div>
                        <select name="state">
                            {stateList.map((item, index) => <option key={index} value={item.name}>{item.name}</option>)}
                        </select>

                        <div className="filterName">Categoria:</div>
                        <ul>
                            {categories.map( (item, index) => 
                                <li key={index} value={item.name} className="categoryItem">
                                    <img src={item.img} alt={item.name} />
                                    <span>{item.name}</span>
                                </li>
                            ) }
                        </ul>

                        {/* <button>Pesquisa</button> */}
                    </form>
                </div>

                <div className="rightSide">
                    right
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default Ads;