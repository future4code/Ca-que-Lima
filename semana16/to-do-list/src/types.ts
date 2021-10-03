export type User = {
    id: number,
    nickname: string
}

export enum STATUS {
    TO_DO = "to_do",
    DOING = "doing",
    DONE = "done",
}

export type Task = {
    id: number,
    title: string,
    description: string,
    status: STATUS,
    limitDate: string,
    creatorUserId: number,
    creatorUserNickname: string
}