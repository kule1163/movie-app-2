export interface Genre {
    id: number;
    name: string;
}

export interface Crew {
    department: string;
    name: string;
    job: string;
    backdrop_path: string;
    vote_average: number;
    id: number;
    original_title: string;
    poster_path: string;
    character: string;
    release_date:string;
    exmp: string
    media_type:string
    original_name: string
}

export interface Cast {
    name: string;
    profile_path: string;
    id: number;
    original_title: string;
    character: string;
    credit_id: string;
    release_date:string;
    exmp: string
    media_type:string
    original_name: string
    job: string
    backdrop_path: string;
    vote_average: number;
    poster_path: string;
}

export interface ProductionCompanies {
    name: string;
    id:number;
}

export interface Video {
    id: string;
    key: string;
    type: string;
    name: string;
}

export interface Photo {
    file_path: string;
    id: string;
}

export interface External {
    facebook_id: string;
    twitter_id: string;
    instagram_id: string;
    imdb_id: string;
}

export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    media_type: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    revenue: number;
    status: number;
    runtime: number;
    budget: number;
    genres: Genre[];
    genre: string | undefined;
    external_ids: External;
    production_companies: ProductionCompanies[];
    credits: {
        crew: Crew[];
        cast: Cast[];
    };
    videos: {
        results: Video[]
    };
    images: {
        backdrops: Photo[];
        posters: Photo[]
    };
    contain?: boolean
}

export interface ListProps {
    created_by: string
    description: string
    favorite_count: number
    id: string
    iso_639_1: string
    item_count: number
    items: MovieType[]
    name: string 
    poster_path:string | null
}
