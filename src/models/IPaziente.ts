export interface IPaziente{
    id: number;
    code: TCodicePazinete;
    firstname: string;
    lastname: string;
    birthdate: DataTransfer;
    doctor: string;
    colorcode: TCodiceColore;
    arrive: TModalitaArrivo;
    state: Tstato;
}

type TCodicePazinete = string;
type TCodiceColore = "ROSSO" | "GIALLO" | "VERDE" | "AZZURRO" | "BIANCO";
type Tstato ="IN ATTESA" | "IN CURA" | "DIMISSIONE" | "DECEDUTO";
type TModalitaArrivo ="AMBULANZA" | "PRIVATO" | "ALTRO";


