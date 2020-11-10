import { Component } from '@angular/core';
import { SomethingElseService } from '../../persistence/something-else.service'

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss']
})
export class CreateDataComponent {
  public somethingElseService: SomethingElseService;

  constructor(somethingElseService: SomethingElseService) {
    this.somethingElseService = somethingElseService;
    }

  async ngOnInit() {
    this.somethingElseService.getSomethingElse();
  }
}

