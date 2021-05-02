import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { DashboardService, ICard } from '../dashboard.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {}

  onLike(card: ICard){
    this.dashboardService.addLike(card).toPromise().then((el) =>{
      console.log('funcionou', el)
    }).catch((e) => {
      console.log('Der erro =>', e)
    })
  }
    

  onShare(){
    window.open('https://www.linkedin.com/in/matheus-dias-044a971a5/', '_blank')
  }

}
