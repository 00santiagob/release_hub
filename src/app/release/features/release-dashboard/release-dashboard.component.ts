import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { CardReleaseComponent } from '../../ui/card-release/card-release.component';
import { ReleasesService } from '../../data/releases.service';
import { Release } from '../../shared/interfaces/releases.interface';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-release-dashboard',
  template: `
    <div class="px-4 py-2 xl:px-0 w-full max-w-[1200px] m-auto">
      <app-search-bar (changeQuery)="changeQuery($event)" />
      <section class="grid grid-cols-1 gap-4 mt-8">
        @for (release of releases$ | async; track release.id) {
          <app-card-release
            [release]="release"
            (deleteRelease)="deleteRelease($event)"
            (editRelease)="editRelease($event)"
          />
        }
      </section>
    </div>
  `,
  standalone: true,
  imports: [CardReleaseComponent, SearchBarComponent, AsyncPipe],
})
export default class ReleaseDashboardComponent {
  private _releasesService = inject(ReleasesService);

  private _router = inject(Router);

  releases$ = this._releasesService.getReleases();

  async deleteRelease(id: string) {
    try {
      await this._releasesService.deleteRelease(id);
    } catch (error) {}
  }

  editRelease(release: Release) {
    this._router.navigate(['/edit', release.id]);
  }

  async changeQuery(query: string) {
    try {
      const releases = await this._releasesService.searchReleaseByQuery(query);
      this.releases$ = of(releases);
    } catch (error) {}
  }
}
