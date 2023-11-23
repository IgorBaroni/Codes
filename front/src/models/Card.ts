export class Card {

    constructor(){
        this.id = 0;
        this.link = '';
        this.description = '';
        this.createdAt = new Date();
    }

    id!: number;
    link!: string;
    description!: string;
    createdAt!: Date | string;
}
