import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private sidebarService:SidebarService,private router:Router){};
  toggleSidebar(){
    this.sidebarService.toggleSidebar();
  }


  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement.value === 'logout') {
        this.logout();
    }
}
  logout(){
    console.log("logout is ON...")
    this.router.navigate(['']);
    localStorage.removeItem('id');
  }
}
