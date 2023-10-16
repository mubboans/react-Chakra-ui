// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface Games {
    id: number;
    background_image: string;
    dominant_color: string;
    name: string;
    playtime: number;
    rating: number;
    rating_top: number;
    slug: string;
    stores: [];
    updated: string;
    platforms: [],
    metacritic: number;
    parent_platforms: { platform: Platform }[]
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}