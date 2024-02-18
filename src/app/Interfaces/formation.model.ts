// formation.model.ts

export interface Formation {
    idFormation: number;
    titre: string;
    prix: number;
    totalmois: number;
    totalheure: number;
    description: string;
    image: string;
    idFormateur: number;
    dateDebut: Date;
    icone: string;
    apropos: string;
    certificat: number;
    attestation: number;
    participants: any[]; // Vous pouvez définir un type plus spécifique si nécessaire
    programme: any[]; // Vous pouvez définir un type plus spécifique si nécessaire
    objectifs: any[]; // Vous pouvez définir un type plus spécifique si nécessaire
}
