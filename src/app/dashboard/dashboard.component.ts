import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardService, ICard } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean = false;
  cards: ICard[] = [];

  constructor(private httpClient: HttpClient, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements(){
    this.isLoading = true
    this.dashboardService.getAll().subscribe((card: ICard[]) => {
      this.cards = card;
      this.isLoading = false;
    })
  }

}
