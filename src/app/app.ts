import { Component, signal } from '@angular/core';

import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Stactic } from './stactic/stactic';
import { MinStatics } from './min-statics/min-statics';
import { MinHero } from './min-hero/min-hero';
import { News } from './news/news';
import { Before } from './before/before';
import { Footer } from './footer/footer';
import { Form } from './form/form';

@Component({
  selector: 'app-root',
  imports: [Header,Hero,Stactic,MinStatics,MinHero,News,Before,Footer,Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('huria');
}
