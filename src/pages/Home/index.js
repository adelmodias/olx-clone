import React from 'react';
import { PageArea, SearchArea } from './styled';
import { PageContainer } from '../../components/MainComponents';
// import useApi from '../../helpers/OlxAPI';

const Home = () => {
    // const api = useApi();

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                                <option></option>
                            </select>
                            <button>Pesquisa</button>
                        </form>
                    </div>

                    <div className="categoryList">

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