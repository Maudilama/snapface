import { Injectable } from '@angular/core'
import { FaceSnap } from '../models/face-snap.model'

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title :"Archibald", 
            description :"Mon meilleur ami depuis tout petit !", 
            createdDate : new Date(), 
            snaps :150, 
            imageUrl :'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            location: 'Paris'
        },
        {
            id: 2,
          title :'Loups', 
          description :'Rencontre avec des loups de montagne', 
          createdDate : new Date(), 
          snaps :50, 
          imageUrl :'https://cdn.pixabay.com/photo/2023/03/21/15/57/wolf-7867593_960_720.jpg',
          location: 'la montagne'
        },
        {
            id: 3,
          title :'Chouette', 
          description :'Ce regard perçant et intense', 
          createdDate :new Date(), 
          snaps :0, 
          imageUrl :'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'}
      ]
      
      getAllFaceSnaps() : FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(id: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}