import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../album';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  id:number=0;
  title?:string;
  album?:Album;
  albumService = inject(AlbumService);

  newName = new FormControl();

  edit:boolean=false;
  showEdit(){
    this.edit = !this.edit;
  }

  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params)
      this.id = params['id'];
    })
    this.albumService.getAlbumById(this.id).subscribe(data => {
      this.album = data;
      this.title = data.title;
      console.log(this.album);
    });
  }


  editingAlbum: Album | null = null; // Track album being edited
  newTitle: string = ''; // Store updated title

  updateAlbum(newTitle: string): void {
    this.albumService.updateAlbum(this.id, newTitle).subscribe(response => {
      this.title=newTitle;
      console.log('Album updated:', response);
    });
  }
}
