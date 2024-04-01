import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Release } from '../../shared/interfaces/releases.interface';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-card-release',
  template: `
    <div class="border border-gray-500/50 rounded-md p-4 flex flex-row gap-x-4 hover:bg-gray-800">
      <div class="flex-1">
        <div class="grid grid-cols-3 flex-1">
          <h2 class="text-white mb-2 font-bold">{{ release.title }}</h2>
          <p class="text-lg font-bold text-yellow-500 mb-2">{{ release.version }}</p>
          <div class="px-2 py-2 m-auto rounded-md text-center bg-gradient-to-r from-red-500 to-pink-500 to-purple-500 to-blue-700 ">
            <p class="text-gray-300 p-* ">{{ release.platform }}</p>
          </div>
        </div>
        <p class="text-gray-400 text-sm">
          {{ release.description ? release.description : 'No description' }}
        </p>
        <div class="grid grid-cols-2 flex-1 gap-2 pt-4">
          @if (release.fixes.length > 0) {
            <div class="border rounded-3xl border-red-500/50">
              <h3 class="text-white text-center py-1 border-b-2 border-red-500/50 rounded-3xl ">🛠️ Fixes</h3>
              <ul class="px-4 list-inside list-disc">
                @for (fix of release.fixes; track fix) {
                  <li>{{ fix }}</li>
                }
              </ul>
            </div>
          }
          @if (release.improvements.length > 0) {
            <div class="border rounded-3xl border-pink-500/50">
              <h3 class="text-white text-center py-1 border-b-2 border-pink-500/50 rounded-3xl ">🛠️ Improvements</h3>
              <ul class="px-4 list-inside list-disc">
                @for (improvement of release.improvements; track improvement) {
                  <li>{{ improvement }}</li>
                }
              </ul>
            </div>
          }
          @if (release.uiChanges.length > 0) {
            <div class="border rounded-3xl border-purple-500/50">
              <h3 class="text-white text-center py-1 border-b-2 border-purple-500/50 rounded-3xl ">🛠️ UI/UX Changes</h3>
              <ul class="px-4 list-inside list-disc">
                @for (uiChange of release.uiChanges; track uiChange) {
                  <li>{{ uiChange }}</li>
                }
              </ul>
            </div>
          }
          @if (release.requirements.length > 0) {
            <div class="border rounded-3xl border-blue-500/50">
              <h3 class="text-white text-center py-1 border-b-2 border-blue-500/50 rounded-3xl ">🛠️ Requirements</h3>
              <ul class="px-4 list-inside list-disc">
                @for (requirement of release.requirements; track requirement) {
                  <li>{{ requirement }}</li>
                }
              </ul>
            </div>
          }
        </div>
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
