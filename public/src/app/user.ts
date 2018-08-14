import { Survey } from './survey';
export class User {
    constructor(
        public name: string= '',
        public email: string= '',
        public survey: Array<Survey> =[],
        public password: string= ''

    ){}
}
