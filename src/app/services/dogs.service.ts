import { Injectable } from '@angular/core';
import { BaseDog } from '../model/BaseDog';

@Injectable()
export class DogsService<T extends BaseDog> {
  prefix = 'original';
  constructor() {}
  /**
   * showYourself
   */
  public showYourself() {
    console.log(`${this.prefix} I am a dog`);
  }
}
