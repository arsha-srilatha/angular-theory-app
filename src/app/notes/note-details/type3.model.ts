export class Type3 {
  public type: number;
  public title: string;
  public description: string[];
  public subTopics: {
    topic: string;
    points: {
      point: string;
      syntax: string;
      description: string[];
    }[];
  }[];

  constructor(
    type: number,
    topic: string,
    description: string[],
    subTopics: {
      topic: string;
      points: { point: string; syntax: string; description: string[] }[];
    }[]
  ) {
    this.type = type;
    this.title = topic;
    this.description = description;
    this.subTopics = subTopics;
  }
}
