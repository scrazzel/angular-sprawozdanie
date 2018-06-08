import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../app/services/data.service';

import { AppComponent } from './app.component';
import { HelloModule } from './modules/hello/hello.module';
import { HttpModule } from '@angular/http';

import { AlbumsComponent } from './components/albums/albums.component';
import { UsersComponent } from './components/users/users.component';
import { HelloComponent } from './components/hello/hello.component';

const appRoutes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'albumy', component: AlbumsComponent},
  { path: 'uzytkownicy', component: UsersComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HelloModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
