import { Component, Input, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

import { IconRocket } from '../../../shared/ui/icons/rocket';
import { IconBack } from '../../../shared/ui/icons/back';
import { ReleasesService } from '../../data/releases.service';
import { ReleaseForm } from '../../shared/interfaces/releases.interface';

import { Platform } from '../../shared/interfaces/releases.interface';

const versionPattern = /^(0|[1-9]\d*)(\.(0|[1-9]\d*)){2}$/;

export interface CreateForm {
  title: FormControl<string>;
  version: FormControl<string>;
  platform: FormControl<Platform[]>;
  description?: FormControl<string | undefined>;
  releaseDate: FormControl<Date>;
  features: FormControl<string[]>;
  improvements: FormControl<string[]>;
  fixes: FormControl<string[]>;
  uiChanges: FormControl<string[]>;
  requirements: FormControl<string[]>;
}

@Component({
  selector: 'app-release-create',
  template: `
    <div class="px-4 xl:px-0 w-full max-w-[600px] m-auto">
      <form [formGroup]="form" (ngSubmit)="createRelease()">
        <div class="mb-8">
          <label for="title" class="block mb-2 text-sm font-medium"
            >Title</label
          >
          <input
            type="text"
            id="title"
            class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
            placeholder="Release Beta or LTS"
            formControlName="title"
          />
        </div>
        <div class="mb-8">
          <label for="version" class="block mb-2 text-sm font-medium"
            >Version</label
          >
          <input
            type="text"
            id="version"
            class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
            placeholder="0.0.0"
            formControlName="version"
          />
        </div>
        <div class="mb-8">
          <label for="platform" class="block mb-2 text-sm font-medium"
            >Platform</label
          >
          <select
            id="platform"
            class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
            formControlName="platform"
            multiple
          >
            <option value="Android">Android</option>
            <option value="ChromeOS">ChromeOS</option>
            <option value="iOS">iOS</option>
            <option value="Linux">Linux</option>
            <option value="Mac">Mac</option>
            <option value="Web">Web</option>
            <option value="Windows">Windows</option>
          </select>
        </div>
        <div class="mb-8">
          <label for="description" class="block mb-2 text-sm font-medium"
            >Description (optional)</label
          >
          <textarea
            rows="5"
            type="text"
            id="description"
            class="w-full p-3 rounded-md text-sm bg-transparent border-gray-500 border"
            placeholder="The description goes here"
            formControlName="description"
          ></textarea>
        </div>

        <div class="flex justify-between items-center">
          <a
            class="text-sm flex text-nowrap items-center gap-x-2 hover:text-gray-300 transition-[color] ease-in-out duration-200 p-4 cursor-pointer"
            routerLink="/"
          >
            <app-icon-back />
            Cancel
          </a>

          <button
            class="text-sm flex text-nowrap items-center gap-x-2 hover:text-gray-300 transition-[color] ease-in-out duration-200 p-4 cursor-pointer"
            type="submit"
          >
            <app-icon-rocket />
            @if (releaseId) {
              Update
            } @else {
              Save
            }
          </button>
        </div>
      </form>
    </div>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, IconRocket, IconBack, RouterLink],
})
export default class ReleaseCreateComponent {
[x: string]: any;
  private _formBuilder = inject(FormBuilder).nonNullable;

  private _router = inject(Router);

  private _releasesService = inject(ReleasesService);

  private _releaseId = '';

  get releaseId(): string {
    return this._releaseId;
  }

  @Input() set releaseId(value: string) {
    this._releaseId = value;
    this.setFormValues(this._releaseId);
  }

  form = this._formBuilder.group<CreateForm>({
    title: this._formBuilder.control('', Validators.required),
    // version: this._formBuilder.control('', Validators.required),
    // version: this._formBuilder.control('', [Validators.required]),
    version: this._formBuilder.control('', [Validators.required, Validators.pattern(versionPattern)]),
    description: this._formBuilder.control(''),
    platform: this._formBuilder.control([]),
    releaseDate: this._formBuilder.control(new Date(), Validators.required),
    features: this._formBuilder.control([]),
    improvements: this._formBuilder.control([]),
    fixes: this._formBuilder.control([]),
    uiChanges: this._formBuilder.control([]),
    requirements: this._formBuilder.control([])
  });

  async createRelease() {
    if (this.form.invalid) return;

    try {
      const release = this.form.value as ReleaseForm;
      !this.releaseId
        ? await this._releasesService.createRelease(release)
        : await this._releasesService.updateRelease(this.releaseId, release);
      this._router.navigate(['/']);
    } catch (error) {
      // call some toast service to handle the error
    }
  }

  async setFormValues(id: string) {
    try {
      const release = await this._releasesService.getRelease(id);
      if (!release) return;
      this.form.setValue({
        title: release.title,
        version: release.version,
        description: release.description,
        platform: release.platform,
        releaseDate: release.releaseDate,
        features: release.features,
        improvements: release.improvements,
        fixes: release.fixes,
        uiChanges: release.uiChanges,
        requirements: release.requirements
      });
    } catch (error) {
      console.error(error);
    }
  }
}
