import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DiaryPageComponent } from './diary-page/diary-page.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [			
    AppComponent,
    CardComponent,
    DiaryPageComponent,
    HeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
