import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  @Input() total: number;

  constructor() { }

  ngOnInit() {
  }

}
