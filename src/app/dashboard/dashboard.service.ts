import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

export interface ICard {
  id: number;
  name: string;
  description: string;
  pic: string;
  likes: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public endpoint: string = '/api/skills'

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICard[]> {
    return this.http.get(this.endpoint).pipe(
      catchError(this.handleError),
      map(this.jsonDataToCard)
    )
  }

  addLike(card: ICard): Observable<ICard> {
    console.log('card on Service',card);
    return this.http.put(`${this.endpoint}/${card.id}`, {
      "id": card.id,
      "name": card.name,
      "description": card.description,
      "pic": card.pic,
      "likes": card.likes++
    }).pipe(
      catchError(this.handleError),
      map((el) => (card))
    )
  }


  private jsonDataToCard(jsonData: any[]): ICard[]{
    const cards: ICard[] = [];
    jsonData.forEach((e) => {
      cards.push(e as ICard)
    })
    return cards
  }

  private handleError(error: any): Observable<any> {
    console.log("Erro na requisição => ",   error);
    return throwError(error);
  }
}
