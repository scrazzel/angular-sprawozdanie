import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums:Album[];
  selectedAlbum: Album;
  
  constructor() { }

  ngOnInit() {
    this.albums = [
      { title: 'Images and Words', band: 'Dream Theater', publicationDate: 1992},
      { title: 'Back in Black', band: 'AC/DC', publicationDate: 1980},
      { title: 'The Dark Side of the Moon', band: 'Pink Floyd', publicationDate: 1973},
      { title: 'Eliminator', band: 'ZZ Top', publicationDate: 1983},
      { title: 'Revolver', band: 'The Beatles', publicationDate: 1966}
    ]
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

interface Album{
  title: string,
  band: string,
  publicationDate: number
}