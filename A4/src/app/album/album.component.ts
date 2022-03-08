import { Component, OnInit } from '@angular/core';
import albumData from '../data/SearchResultsAlbum.json';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album:any;

  constructor() { 
    this.album = albumData;
    console.log(this.album);
  }

  ngOnInit(): void {
  }

}
