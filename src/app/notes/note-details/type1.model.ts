export class Type1 {
    public type: number;
    public title: string;
    public definition: string;
    public syntax: string;
    public description: string[];
    public cliCommand: string;

    constructor(type: number, title: string, definition: string, syntax: string, description: string[], cliCommand?: string){
        this.type = type;
        this.title = title;
        this.definition = definition;
        this.syntax = syntax;
        this.description = description;
        this.cliCommand = cliCommand;
    }
}