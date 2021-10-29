export class Post {
    constructor(
        private id: string,
        private picture: string,
        private description: string,
        private creation_date: string,
        private type: string,
        private user_id: string
    ) {}

    public getId(): string {
        return this.id
    }

    public getPicture(): string {
        return this.picture
    }

    public getDescription(): string {
        return this.description
    }

    public getCreationDate(): string {
        return this.creation_date
    }

    public getType(): string {
        return this.type
    }

    public getUserId(): string {
        return this.user_id
    }
}

export interface PostInputDTO {
    picture: string,
    description: string,
    type: string
}