import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  Firestore,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Release, ReleaseForm } from '../shared/interfaces/releases.interface';
import { Observable } from 'rxjs';

const PATH = 'releases';

@Injectable({
  providedIn: 'root',
})
export class ReleasesService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, PATH);

  getReleases() {
    return collectionData(
      this._collection,
      { idField: 'id' }
    ) as Observable<Release[]>;
  }

  async getRelease(id: string) {
    try {
      const snapshot = await getDoc(this.document(id));
      return snapshot.data() as Release;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  async searchReleaseByQuery(queryString: string) {
    const q = query(
      this._collection,
      // where('title', '>=', queryString),
      // where('title', '<=', queryString + '\uf8ff')
    );
    const querySnapshot = await getDocs(q);
    let releases: Release[] = [];
    querySnapshot.forEach((doc) => {
      // releases = [...releases, { id: doc.id, ...doc.data() } as Release];
      const release = doc.data() as Release;
      console.log(release);
      // Verificar si el título o la versión contienen la cadena de búsqueda
      const titleMatch = release.title.toLowerCase().includes(queryString.toLowerCase());
      const versionMatch = release.version.toLowerCase().includes(queryString.toLowerCase());
      const platformMatch = release.platform
        .map(platform => platform.toLowerCase())
        .includes(queryString.toLowerCase());
      if (titleMatch || versionMatch || platformMatch) {
        releases = [...releases, { id: doc.id, ...doc.data() } as Release];
      }
    });
    return releases;
  }

  createRelease(release: ReleaseForm) {
    return addDoc(this._collection, release);
  }

  updateRelease(id: string, release: ReleaseForm) {
    return updateDoc(this.document(id), { ...release });
  }

  deleteRelease(id: string) {
    return deleteDoc(this.document(id));
  }

  private document(id: string) {
    return doc(this._firestore, `${PATH}/${id}`);
  }
}
