import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent  implements OnInit{

  faceSnap!: FaceSnap;
  btn! : string;

  constructor(private faceSnapsServices: FaceSnapsService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.btn = 'Oh Snap';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsServices.getFaceSnapById(snapId);
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


}
