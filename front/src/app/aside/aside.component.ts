import { Component, OnInit } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public portugues = environment.portugues;

  ngOnInit() {
    
  }

  mudarIdioma(){
    environment.portugues = !environment.portugues;
    this.portugues = !this.portugues;
  }
}
