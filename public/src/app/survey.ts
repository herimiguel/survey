import {User} from './user';

export class Survey {
    constructor(
        public id: number= null,
        public content: string = "",
        public author1: string = "",
        public author2: string = "",
        public author3: string = "",
        public author4: string = "",
        public rate: number = 0,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()

    ){}
}
