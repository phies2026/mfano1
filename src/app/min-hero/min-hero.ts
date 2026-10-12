import { Component } from '@angular/core';

@Component({
  selector: 'app-min-hero',
  imports: [],
  templateUrl: './min-hero.html',
  styleUrl: './min-hero.css',
})
export class MinHero {
  learn(){
    alert("you click applied button...");
  }
}
