import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output()
  sideNavToggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(){
    this.sideNavToggle.emit();
  }

}
