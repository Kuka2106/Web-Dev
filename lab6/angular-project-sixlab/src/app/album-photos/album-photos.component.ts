import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const albumId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .subscribe(data => {
        this.photos = data;
      });
  }

  goBack(): void {
    this.router.navigate([`/albums/${this.route.snapshot.paramMap.get('id')}`]);
  }
}

