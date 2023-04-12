import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Accept": 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PetService {
  petURL = `${environment.petURL}/pet` ;
  constructor(private httpClient: HttpClient) { }
   list(): Observable<any>{
    return this.httpClient.get<any>(`${this.petURL}`);
  }
}