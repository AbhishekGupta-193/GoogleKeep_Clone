import { Component, Output ,EventEmitter} from '@angular/core';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  @Output() title = new EventEmitter();
  notesList!: any[];
  constructor(private http: HttpService) { }

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
  }
  filterData() {
    this.notesList = this.notesList.filter((item) => {
      if (item.isArchived == true || item.isDeleted == false) {
        return item;
      }
    })
  }
}
