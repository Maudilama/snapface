import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  btn! : string;

  constructor(private faceSnapsServices: FaceSnapsService,
              private router: Router){}

  ngOnInit(): void {
    this.btn = 'Oh Snap';
  }

  onClickSnap(){
    if(this.btn === 'Oh Snap'){
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.btn = 'Oops, un Snap!'
    }else{
      this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.btn = 'Oh Snap'
    }
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
  
}
