export class Attempt {

  constructor(
    public isFull: boolean,
    private urlFullLife: string = 'assets/full_heart.png',
    private urlEmptyLife: string = 'assets/empty_heart.png'
  ) { }

  get url() {
    if (this.isFull) {
      return this.urlFullLife;
    }
    return this.urlEmptyLife;
  }
}
