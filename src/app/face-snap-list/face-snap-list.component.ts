import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snap.service';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps! : FaceSnap[];
  constructor(private faceSnapsService: FaceSnapsService){}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    
  }

  
  
}
