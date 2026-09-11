import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import type { SkillGroup } from '../../core/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  hostDirectives: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'tile tile-2x1 tile-skills' },
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly groups = input.required<SkillGroup[]>();
}
