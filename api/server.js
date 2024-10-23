const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({
    origin: '*'
}));

app.use(express.json());

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`CREATE TABLE professionals (
    id TEXT PRIMARY KEY,
    name TEXT,
    formation TEXT,
    specialization TEXT,
    description TEXT,
    tags TEXT,
    photo TEXT,
  )`);

    const professionalsData = [
        {
            id: '1',
            name: 'Andréa Freitas',
            formation: 'Enfermagem',
            specialization: 'Práticas Integrativas',
            description: 'Especialista em práticas integrativas complementares, como reiki, cromoterapia e aromaterapia, que auxiliam no bem-estar físico e mental. Oferece acompanhamento domiciliar no trabalho de parto e amamentação. Experiência em colocação de sondas, curativos especializados e implantes contraceptivos.',
            tags: ['Reiki', 'Cromoterapia', 'Aromaterapia', 'Acompanhamento Domiciliar', 'Implantes Contraceptivos'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',

        },
        {
            id: '2',
            name: 'João Souza',
            formation: 'Nutricionista',
            specialization: 'Dieta Personalizada',
            description: 'Especialista em nutrição personalizada, com foco em dietas específicas para condições de saúde, como diabetes, hipertensão e obesidade. Desenvolve planos alimentares balanceados e monitora o progresso dos pacientes. Experiência em avaliação nutricional e reeducação alimentar para promover uma vida saudável.',
            tags: ['Reeducação Alimentar', 'Dietas Específicas', 'Acompanhamento Nutricional'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',

        },
        {
            id: '3',
            name: 'Alice Gomes',
            formation: 'Enfermagem',
            specialization: 'Sondas',
            description: 'Experiência em administração e manejo de sondas, incluindo sondas nasogástricas e vesicais. Realiza procedimentos para garantir a manutenção adequada e o conforto do paciente. Também especializada em injeções e curativos, oferecendo um cuidado abrangente.',
            tags: ['Sondas', 'Injeções', 'Vacinas', 'Curativos'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',

        },
        {
            id: '4',
            name: 'Carla Pereira',
            formation: 'Terapia Ocupacional',
            specialization: 'Reabilitação Física',
            description: 'Ajuda pacientes a recuperar habilidades para realizar atividades diárias após lesões ou doenças. Trabalha com pacientes para melhorar a coordenação, força e habilidades motoras. Utiliza técnicas terapêuticas para promover a independência e a qualidade de vida.',
            tags: ['Reabilitação', 'Atividades Diárias', 'Apoio'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',

        },
        {
            id: '5',
            name: 'Fernanda Costa',
            formation: 'Fisioterapia',
            specialization: 'Reabilitação Pós-Cirúrgica',
            description: 'Especialista em reabilitação física após cirurgias ortopédicas e neurológicas. Elabora e aplica programas de exercícios para promover a recuperação completa e a restauração da mobilidade. Acompanha o progresso do paciente e ajusta os tratamentos conforme necessário.',
            tags: ['Fisioterapia', 'Reabilitação', 'Exercícios'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',

        },
        {
            id: '6',
            name: 'Lucas Almeida',
            formation: 'Fonoaudiologia',
            specialization: 'Tratamento de Disfagia',
            description: 'Experiência no tratamento de dificuldades de deglutição e distúrbios da fala. Realiza avaliações detalhadas e desenvolve planos de tratamento personalizados. Trabalha para melhorar a comunicação e a segurança alimentar dos pacientes.',
            tags: ['Disfagia', 'Fala', 'Comunicação'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',

        },
        {
            id: '7',
            name: 'Paula Martins',
            formation: 'Cuidadora de Idosos',
            specialization: 'Assistência Domiciliar',
            description: 'Proporciona cuidados e apoio diário para idosos, incluindo auxílio em atividades diárias como alimentação e higiene. Garante o bem-estar geral dos pacientes, oferecendo companhia e suporte emocional. Experiência em lidar com diversas necessidades de cuidados.',
            tags: ['Assistência Domiciliar', 'Idosos', 'Apoio Diário'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',

        },
        {
            id: '8',
            name: 'Cláudia Rodrigues',
            formation: 'Técnico de Enfermagem',
            specialization: 'Cuidados Gerais',
            description: 'Oferece suporte e cuidados gerais em ambientes domiciliares e instituições de saúde. Realiza monitoramento de sinais vitais, administração de medicamentos e assistência em atividades diárias. Experiência em atender a diferentes perfis de pacientes e suas necessidades.',
            tags: ['Cuidados Gerais', 'Suporte', 'Ambientes Domiciliares'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',

        },
        {
            id: '9',
            name: 'Eduarda Martins',
            formation: 'Psicologia',
            specialization: 'Apoio a Pacientes com Mobilidade Reduzida',
            description: 'Oferece suporte psicológico contínuo para pacientes com dificuldades de mobilidade ou em tratamento prolongado em casa. Trabalha para melhorar o bem-estar emocional e ajustar o suporte psicológico às necessidades individuais dos pacientes. Auxilia na adaptação ao ambiente domiciliar e no enfrentamento das limitações.',
            tags: ['Psicologia', 'Mobilidade Reduzida', 'Apoio Emocional', 'Tratamento Domiciliar'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',

        },
        {
            id: '10',
            name: 'Roberta Lima',
            formation: 'Cuidadora de Idosos',
            specialization: 'Assistência Domiciliar',
            description: 'Proporciona cuidados e apoio diário para idosos, incluindo auxílio em atividades diárias como alimentação, mobilidade e higiene pessoal. Foca na promoção do conforto e bem-estar do paciente, oferecendo companhia e suporte emocional. Experiência em criar um ambiente seguro e acolhedor em casa, garantindo uma assistência completa e atenciosa.',
            tags: ['Assistência Domiciliar', 'Idosos', 'Apoio Diário'],
            photo: 'https://riverstonewellness.ca/wp-content/uploads/2022/02/when-to-see-a-physiotherapist.jpg',
        },
    ];

    const stmt = db.prepare(`INSERT INTO professionals VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
    professionalsData.forEach(professional => {
        stmt.run(professional.id, professional.name, professional.formation, professional.specialization, professional.description, professional.tags.join(','), professional.photo, professional.rating);
    });
    stmt.finalize();
});

app.get('/professionals', (req, res) => {
    console.log("Received request for professionals");
    db.all('SELECT * FROM professionals', [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: err.message });
        } else {
            const formattedRows = rows.map(row => ({
                ...row,
                tags: row.tags.split(',')
            }));
            res.json(formattedRows);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
