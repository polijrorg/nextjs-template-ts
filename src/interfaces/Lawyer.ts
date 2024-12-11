export interface Lawyer {
    name: string;
    password: string;
    gender: string;
    cnpj: string;
    company: string;
    phone: string;
    email: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    complement: string;
    numberHouse: string;
    neighborhood: string;
    servicetext: string;
    actingtext: string;
}

export interface LoginLawyer {
    cnpj: string;
    password: string;
}
