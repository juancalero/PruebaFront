import { Injectable } from '@angular/core';
import { FavoritoResponse, FavoritoData } from '../interfaces/favoritoResponse';
import { OpinionResponse, OpinionData } from '../interfaces/opinionResponse';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getFavoritos(){
    return this.firestore.collection('fav').snapshotChanges();
  }

  newFavorito(fav: FavoritoData){
    return this.firestore.collection('fav').add(fav);
  }

  deleteFavorito(fav: FavoritoResponse){
    this.firestore.doc('fav/' + fav.id).delete();
  }


  getOpiniones(){
    return this.firestore.collection('opi').snapshotChanges();
  }

  newOpinion(opi: OpinionData){
    return this.firestore.collection('opi').add(opi);
  }

  deleteOpinion(opi: OpinionResponse){
    this.firestore.doc('opi/' + opi.id).delete();
  }


}
