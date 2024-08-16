import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  isVisible=true;
  constructor(private sidebarService:SidebarService){};

  ngOnInit(){
    this.sidebarService.sidebarVisible$.subscribe(visible=>{
      this.isVisible=visible;
    })
  }

}

