import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './presentation/nav-menu/nav-menu.component';
import { HomeComponent } from './presentation/home/home.component';
import { CreateDataComponent } from './presentation/create-data/create-data.component';
import { SomethingElseService  } from '../../../../libs/something-else/src/lib/persistence/something-else.service'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CreateDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'create-data', component: CreateDataComponent },
    ])
  ],
  providers: [SomethingElseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

