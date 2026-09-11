import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { Icon } from '../../shared/icon/icon';
import type { Project } from '../../core/portfolio-data';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [Icon],
  hostDirectives: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'tile tile-2x2 tile-project' },
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();

  protected readonly initials = computed(() =>
    this.project()
      .title.split(/[\s—-]/)
      .filter((w) => /^[A-Za-z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase(),
  );
}
