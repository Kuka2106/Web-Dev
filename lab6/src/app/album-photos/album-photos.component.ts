import { Component, inject } from '@angular/core';
import { AlbumPhotos } from '../album-photos';
import { AlbumService } from '../services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos?:AlbumPhotos[];
  id?:number;
  albumService = inject(AlbumService);
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params)
      this.id = params['id'];
    })
    this.albumService.getPhotosById(this.id).subscribe(data => {
      this.photos = data;
      console.log(this.photos);
    });
  }
  
}
