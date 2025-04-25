import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Для работы с HTTP-запросами
import { FormsModule } from '@angular/forms'; // Для двустороннего связывания данных
import { RouterModule } from '@angular/router'; // Для маршрутизации

import { AppComponent } from './app.component'; // Корневой компонент
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([  // Настройка маршрутов
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'albums/:id', component: AlbumDetailComponent },
      { path: 'albums/:id/photos', component: AlbumPhotosComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent] // Указание корневого компонента
})
export class AppModule { }

