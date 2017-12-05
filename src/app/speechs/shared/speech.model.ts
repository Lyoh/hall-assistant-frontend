export class Speech {
  constructor(
    public id: number,
    public title: string,
    public subjects: Array<string>
  ) { }

  public getSubjects() {
    return this.subjects.join(' / ');
  }

}
