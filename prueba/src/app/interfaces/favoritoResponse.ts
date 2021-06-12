export interface FavoritoResponse {
    id?: string;
    data?: FavoritoData;
}

export interface FavoritoData{
    anyo?: string;
    id?: number;
    director?: string;
    name?: string;
    poster?: string;
}