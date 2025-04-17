import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Album } from '../album';
import { Observable } from 'rxjs';
import { AlbumService } from '../services/album.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums:any;
  newAlbum: any;
  tempId: number = 100;
  albumForm = new FormGroup({
    title: new FormControl('')
  });
  loading = false;
  message = '';
  
  constructor(private albumService : AlbumService){

  }
  ngOnInit(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  creatingAlbum:boolean = false;

  addAlbum(): void {

    const title = this.albumForm.value.title?.trim();
    if (!title) return;

    const newAlbum: Album = { userId: 1, id: this.tempId++, title };

      this.albumService.addAlbum(newAlbum).subscribe(album => {
      this.albums.unshift(album);
      this.albumForm.reset(); 
    });
  }

  newAlbumButton:boolean=false;
  showHide(){
    this.newAlbumButton = !this.newAlbumButton;
  }
}
