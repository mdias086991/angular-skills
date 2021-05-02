import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService, ICard } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: ICard[] = [];

  constructor(private httpClient: HttpClient, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements(){
    this.dashboardService.getAll().subscribe((card: ICard[]) => {
      this.cards = card;
    })
  }

}
