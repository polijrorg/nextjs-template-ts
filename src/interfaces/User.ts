export interface User {
    name: string;
    password: string;
    gender: string;
    cpf: string;
    phone: string;
    email: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    complement: string;
    numberHouse: string;
    neighborhood: string;
}

export interface LoginUser {
    cpf: string;
    password: string;
}
