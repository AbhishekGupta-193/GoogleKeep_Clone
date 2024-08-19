import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  
  getAllNotes(){
    console.log("http is working");
    return this.http.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=7iCJEpYTdL5h3OAfv4MiACxQrX2Gpbb3ZyMlv1uWly5W2ifuwhOoBAYFHEyRJ8Q5")
  }
}
