import { Injectable } from '@angular/core';

@Injectable()
export class TheService {
  prefix = 'original';
  constructor() {}
  /**
   * showYourself
   */
  public showYourself() {
    console.log(`${this.prefix} I am a dog`);
  }
}
