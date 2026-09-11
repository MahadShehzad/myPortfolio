import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { Icon } from '../../shared/icon/icon';
import { focusAreas } from '../../core/portfolio-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [Icon],
  hostDirectives: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'tile tile-2x2 tile-focus', id: 'work' },
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly areas = focusAreas;
}
