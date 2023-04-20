import { SearchModule } from './shared/ui/search/search.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsModule } from './features/planets/planets.module';
import { FightObsVsPromComponent } from './learnings/fight-obs-vs-prom/fight-obs-vs-prom.component';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SearchModule,
    PlanetsModule,
    FightObsVsPromComponent,
    //RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
