export interface ModeloContato {
    nome: string;
    numero: string;
}

const contatos: ModeloContato[] = [
    {
        nome: "João Silva",
        numero: "+55 11 91234-5678",
    },
    {
        nome: "Maria Oliveira",
        numero: "+55 21 98765-4321",
    },
    {
        nome: "Carlos Souza",
        numero: "+55 31 99876-5432",
    },
    {
        nome: "Ana Pereira",
        numero: "+55 41 94567-8901",
    },
];

export default contatos;
