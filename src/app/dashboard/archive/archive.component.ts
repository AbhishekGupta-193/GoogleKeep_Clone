import { Component, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SearchbarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  searchedItem: string = '';

  @Output() title = new EventEmitter();
  notesList!: any[];
  constructor(private http: HttpService, private searchService: SearchbarService) { }

  ngOnInit(): void {
    this.http.getAllNotes().subscribe({
      next: (res: any) => {
        console.log("res", res.data.data);
        this.notesList = res.data.data;
        this.filterData();
      },
      error: (err: string) => {
        console.log("err", err);
      }
    })

    //SearchService for Search Bar in Header
    this.searchService.currentData.subscribe(data => {
      this.searchedItem = data;
    })
  }
  filterData() {
    this.notesList = this.notesList.filter((item) => {
      if (item.isArchived == true || item.isDeleted == false) {
        return item;
      }
    })
  }
}
