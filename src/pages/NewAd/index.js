import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const NewAd = () => {
    const api = useApi();
    const fileField = useRef();
    const history = useHistory();

    const [categories, setCategories] = useState([]);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [description, setDescription] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);
        setError('');
        let errors = [];

        if ( !title.trim() ) {
            errors.push('Digite o título do anúncio.');
        }

        if ( !category ) {
            errors.push('Selecione uma categoria.');
        }

        if ( errors.length === 0 ) {
            const fData = new FormData();
            fData.append('title', title);
            fData.append('cat', category);
            fData.append('price', price);
            fData.append('priceneg', priceNegotiable);
            fData.append('desc', description);
            
            let fLength = fileField.current.files;

            if ( fLength.length > 0 ) {
                for(let i = 0; i < fLength.length; i++) {
                    fData.append('img', fLength[i]);
                }
            }

            const json = await api.addAd(fData);

            if ( !json.error ) {
                history.push(`/ad/${json.id}`);
                return;
            } else {
                setError(json.error);
            }

        } else {
            setError(errors.join("\n"));
        }

        setDisabled(false);
    }

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        includeThounsandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    });

    return (
        <PageContainer>
            <PageTitle>Postar um anúncio</PageTitle>

            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Título</div>
                        <div className="area--input">
                            <input type="text" value={title} onChange={e=>setTitle(e.target.value)} disabled={disabled} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                            <select onChange={e=>setCategory(e.target.value)} disabled={disabled} required>
                                <option>Selecione uma categoria</option>
                                {categories && categories.map(i =>
                                    <option key={i._id} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            <MaskedInput mask={priceMask} placeholder="R$ " disabled={disabled || priceNegotiable} value={price} onChange={e=>setPrice(e.target.value)} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Preço negociável?</div>
                        <div className="area--input">
                            <input type="checkbox" checked={priceNegotiable} onChange={()=>setPriceNegotiable(!priceNegotiable)} disabled={disabled} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea value={description} disabled={disabled} onChange={e=>setDescription(e.target.value)}></textarea>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Imagens</div>
                        <div className="area--input">
                            <input type="file" disabled={disabled} ref={fileField} multiple />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Enviar novo anúncio</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default NewAd;