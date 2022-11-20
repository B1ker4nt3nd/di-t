import { Component, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDogsComponent } from '../bases/base-dogs.component';
import { SmallDog } from '../model/SmallDog';
import { DogsService } from '../services/dogs.service';
import { TheService } from '../services/the.service';

@Component({
  selector: 'app-small-dogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-dogs.component.html',
  styleUrls: ['./small-dogs.component.scss'],
  providers: [
    {
      provide: TheService,
      useClass: DogsService<SmallDog>,
      // useFactory: () => new DogsService<SmallDog>(),
    },
  ],
})
export class SmallDogsComponent extends BaseDogsComponent<SmallDog> {
  /**
   *
   */
  constructor(@Self() protected override dogsService: TheService) {
    super(dogsService);
    console.log(this.dogsService.prefix);
    this.dogsService.prefix = 'small';
  }
}
