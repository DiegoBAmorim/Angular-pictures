import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = "http://localhost:3000";

@Injectable({
  providedIn: 'root' // qualquer component terá esse cara disponivel na mesma instancia.
})

export class PhotoService{
  constructor(private http: HttpClient){}

  listFromUser(userName: string){
    return this.http.get<Photo[]>(API + "/" + userName + '/photos');
  }
}
