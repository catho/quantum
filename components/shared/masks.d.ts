interface maskProps {
    cep: (string | RegExp)[];
    cnpj: (string | RegExp)[];
    cpf: (string | RegExp)[];
    date: (string | RegExp)[];
    phone: (userInput: any) => (string | RegExp)[];     
}

declare const mask: maskProps;

export default mask;