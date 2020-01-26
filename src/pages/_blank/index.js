import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';

const AdPage = () => {
    const api = useApi();

    return (
        <PageContainer>
            <PageArea>
            </PageArea>
        </PageContainer>
    );
}

export default AdPage;