export interface GameCardType {
    id: number,
    title: string,
    game_url: string,
    short_description: string,
    thumbnail: string,
    genre: string,
    platform: string,
    publisher: string
}

export interface AllGameListType {
    data: GameCardType
}
