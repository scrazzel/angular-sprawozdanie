import { Component, OnInit } from '@angular/core';
import { Album } from '../../albums';
import { ALBUMS } from '../../mock-albums';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums = ALBUMS;
  selectedAlbum: Album;
  
  constructor() { }

  ngOnInit() {

  }

  onAlbumClick(album:Album){
    if(album !== this.selectedAlbum){
      this.selectedAlbum = album;
    }
    else{
      this.selectedAlbum = null;
    }
  }

  addAlbum(title, band, publicationDate){
    console.log(title + band + publicationDate);
    this.albums.push({title: title, band: band, publicationDate: publicationDate});
  }

  deleteAlbum(i){
    this.albums.splice(i,1);
  }
  
}