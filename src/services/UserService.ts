import * as User from 'interfaces/User';
import * as Lawyer from 'interfaces/Lawyer';
import { setCookie } from 'nookies';

import api from './api';

export default class UserService {
    // Login e Cadastro de Usuário

    static async createUser(data: User.User): Promise<User.User> {
        const response = await api.post('/users/register', data);
        return response.data;
    }

    static async Login(data: User.LoginUser): Promise<User.User> {
        const response = await api.post('/users/login', data);
        setCookie(undefined, '@app:token', response.data.token);
        setCookie(undefined, '@app:useId', response.data.user.name);
        return response.data;
    }

    // Login e Cadastro de Advogados

    static async createLayer(data: Lawyer.Lawyer): Promise<Lawyer.Lawyer> {
        const response = await api.post('/users/register', data);
        return response.data;
    }

    static async LoginLayer(data: Lawyer.LoginLawyer): Promise<Lawyer.Lawyer> {
        const response = await api.post('/users/login', data);
        setCookie(undefined, '@app:token', response.data.token);
        setCookie(undefined, '@app:useId', response.data.user.name);
        return response.data;
    }
}
