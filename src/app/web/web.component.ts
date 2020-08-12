import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
