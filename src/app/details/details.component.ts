import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
        asdasd {{ houstingLocationId }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  houstingLocationId = 0;

  constructor () {
    this.houstingLocationId = Number(this.route.snapshot.params['id']);
  }
}
