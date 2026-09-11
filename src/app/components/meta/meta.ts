import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { Icon } from '../../shared/icon/icon';
import { personal, projects } from '../../core/portfolio-data';

@Component({
  selector: 'app-meta',
  standalone: true,
  imports: [Icon],
  hostDirectives: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'tile tile-2x1 tile-meta' },
  templateUrl: './meta.html',
  styleUrl: './meta.scss',
})
export class Meta {
  protected readonly personal = personal;
  protected readonly repoCount = projects.length;
}
