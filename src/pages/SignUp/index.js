import React, { useState, useEffect } from 'react';
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
import useApi from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandler';

const SignIn = () => {
    const api = useApi();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stateLocList, setStateLocList] = useState([]);

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateLocList(sList);
        }
        getStates();
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);
        setError('');

        if ( password !== confirmPassword ) {
            setError('Confirmação de senha com erro!');
            setDisabled(false);
            return;
        }

        const json = await api.register(name, stateLoc, email, password, confirmPassword);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }

        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>

            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input type="text" value={name} onChange={e=>setName(e.target.value)} disabled={disabled} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            {/* <input type="text" value={stateLoc} onChange={e=>setStateLoc(e.target.value)} disabled={disabled} required /> */}
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateLocList.map((item, index) => <option key={index} value={item._id}>{item.name}</option> )}
                            </select>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} disabled={disabled} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} disabled={disabled} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Confirmar Senha</div>
                        <div className="area--input">
                            <input type="password" checked={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} disabled={disabled} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default SignIn;