import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.http.get<any>(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .subscribe(data => {
        this.album = data;
      });
  }

  saveChanges(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.http.put<any>(`https://jsonplaceholder.typicode.com/albums/${id}`, this.album)
      .subscribe(() => {
        this.router.navigate([`/albums/${id}`]);
      });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.router.navigate([`/albums/${id}/photos`]);
  }
}
