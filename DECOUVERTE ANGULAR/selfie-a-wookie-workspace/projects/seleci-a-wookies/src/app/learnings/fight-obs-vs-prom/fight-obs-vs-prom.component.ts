import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'saw-fight-obs-vs-prom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fight-obs-vs-prom.component.html',
  styleUrls: ['./fight-obs-vs-prom.component.css']
})
export class FightObsVsPromComponent implements OnInit, OnDestroy {
  public obs$ !: Observable<string>;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private subscription = new Subscription();

  ngOnInit(): void {
    console.info('------------------------------------');

    const promise = new Promise((resolve, reject) => {
      console.info("Promise: I'm doing something async");
      setTimeout(() => {
      }, 1000);
      resolve('Promise: I have the result');
    }).then(item => console.info(item));

    this.obs$ = new Observable(observer => {
      console.info("Observable: I'm doing something ");

      observer.error('Observable: I have an error');

      for (let i = 0; i < 10; i++) {
        console.info('fois Avant');
        observer.complete();
        observer.next(`Observable: I have the result ${i}`);
        console.info('fois après');
      }

      console.info('Observable: I have finished');
    });

    // const sub = observable$.subscribe(item => console.info(item),);
    // this.subscription.add(sub);

    console.info('***********************************');
  }
}
