import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Router } from '@angular/router';
import { SearchbarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchedItem: string = '';
  
  constructor(private sidebarService: SidebarService, private router: Router, private searchService: SearchbarService) { };
  
  //Toggle Sidebar Functionality 
  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }


  //Log Out Functionality in Dashboard
  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement.value === 'logout') {
      this.logout();
    }
  }
  logout() {
    console.log("logout is ON...")
    this.router.navigate(['']);
    localStorage.removeItem('id');
  }

  //Search functionality : To Provide the seacrched string to my NotesContainer Component
  onSearch(){
    console.log("search button is clicked")
    this.searchService.updateData(this.searchedItem);
  }
}
