import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../album';
import { Observable } from 'rxjs';
import { AlbumPhotos } from '../album-photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  url='https://jsonplaceholder.typicode.com/albums';
  urlPhotos='https://jsonplaceholder.typicode.com/albums/1/photos';
  constructor(private http:HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.url);
  }
  getAlbumById(id:number|undefined):Observable<Album>{
    return this.http.get<Album>(`${this.url}/${id}`);
  }
  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.url, album);
  }

  updateAlbum(id: number, newTitle: string): Observable<Album> {
    return this.http.patch<Album>(`${this.url}/${id}`, { title: newTitle });
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  getPhotosById(id?:number):Observable<AlbumPhotos[]>{
    return this.http.get<AlbumPhotos[]>(`${this.url}/${id}/photos`);
  }
}
