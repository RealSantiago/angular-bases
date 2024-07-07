import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spider man';
  }

  changeAge(): void {
    this.age = 24;
  }

  reset(): void {
    // this.name = 'iroman';
    this.age = 45;
  }
}
