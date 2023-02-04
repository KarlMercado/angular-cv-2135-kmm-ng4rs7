import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent implements OnInit {
  num = [
    'Optimal Prime: The Quintessential Guide to a Famed Channel',
    'Design of the Times: Exemplifying the Beauty of Design through Implementation',
    'Top 8 in class (2018 - 2019)',
    'Top 10 in class (2016 - 2017)',
  ];
  myColor = 'green';
  constructor() {}

  ngOnInit() {}
}
