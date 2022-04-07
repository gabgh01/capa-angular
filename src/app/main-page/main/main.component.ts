import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  title: string = 'capacitacion angular';
  listUser:any = [
    { name: 'pepito perez', nickname: 'el pepe', email: 'elppepe@gmail.com' },
    { name: 'pepita perez', nickname: 'el pepa', email: 'elpepa@gmail.com' },
    { name: 'juanita perez', nickname: 'nita', email: 'elnita@gmail.com' },
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
}
