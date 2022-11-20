import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDogsComponent } from '../bases/base-dogs.component';
import { BigDog } from '../model/BigDog';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-big-dogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-dogs.component.html',
  styleUrls: ['./big-dogs.component.scss'],
  providers: [DogsService],
})
export class BigDogsComponent extends BaseDogsComponent<BigDog> {
  /**
   *
   */
  constructor(protected override dogsService: DogsService<BigDog>) {
    super(dogsService);
    console.log(this.dogsService.prefix);
    this.dogsService.prefix = 'big';
  }
}
