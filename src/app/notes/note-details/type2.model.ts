export class Type2 {
    public type: number;
    public title: string;
    public definition: string;
    public subTypes: {
        title: string,
        syntax: string,
        example: string,
        description: string[]
    }[];

    constructor(type: number, title: string, definition: string, subTypes: { title: string, syntax: string, example: string, description: string[]}[]){
        this.type = type;
        this.title = title;
        this.definition = definition;
        this.subTypes = subTypes;
    }
}