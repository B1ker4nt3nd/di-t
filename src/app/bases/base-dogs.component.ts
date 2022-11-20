import { Component, OnInit } from '@angular/core';
import { BaseDog } from '../model/BaseDog';
import { DogsService } from '../services/dogs.service';

@Component({
  template: '',
})
export abstract class BaseDogsComponent<T extends BaseDog> implements OnInit {
  constructor(protected dogsService: DogsService<T>) {}

  ngOnInit() {
    this.dogsService.showYourself();
  }
}
