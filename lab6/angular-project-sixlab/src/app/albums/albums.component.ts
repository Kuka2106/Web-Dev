import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe(data => {
        this.albums = data;
      });
  }

  deleteAlbum(id: number): void {
    this.http.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .subscribe(() => {
        this.albums = this.albums.filter(album => album.id !== id);
      });
  }

  viewAlbumDetail(id: number): void {
    this.router.navigate([`/albums/${id}`]);
  }
}
