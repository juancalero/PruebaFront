export interface OpinionResponse {
    id?: string;
    data?: OpinionData;
}

export interface OpinionData{
    id?: number;
    opinion?: string;
    valor?: number;
    titulo?: string;
    poster?: string;
}
