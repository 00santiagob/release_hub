import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Release } from '../../shared/interfaces/releases.interface';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-card-release',
  template: `
    <div class="border border-gray-500/50 rounded-md p-4 flex flex-row gap-x-4">
      <div class="flex-1">
        <h4 class="text-white mb-2 font-bold">{{ release.title }}</h4>
        <small class="text-yellow-500 mb-2">{{ release.version }}</small>
        <p class="text-gray-300 mb-2">{{ release.platform }}</p>
        <p class="text-gray-400 text-sm">
          {{ release.description ? release.description : 'No description' }}
        </p>
      </div>
      <div>
        <app-menu
          (onEditRelease)="onEditRelease(release)"
          (onDeleteRelease)="onDeleteRelease(release)"
        />
      </div>
    </div>
  `,
  standalone: true,
  imports: [MenuComponent],
})
export class CardReleaseComponent {
  @Input({ required: true }) release!: Release;

  @Output() editRelease = new EventEmitter<Release>();

  @Output() deleteRelease = new EventEmitter<string>();

  onEditRelease(release: Release) {
    this.editRelease.emit(release);
  }

  onDeleteRelease(release: Release) {
    this.deleteRelease.emit(release.id);
  }
}
