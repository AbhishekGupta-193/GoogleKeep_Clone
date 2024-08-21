import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class PipePipe implements PipeTransform {

  transform(notesList:any[], searchedItem: string): any[] {
    console.log("Pipe is ON")
    if(!notesList || !searchedItem){
      return notesList;
    }
    return notesList.filter((note)=>note.title.toLowerCase().includes(searchedItem.toLowerCase()) || note.description.toLowerCase().includes(searchedItem.toLowerCase()));
  }

}
