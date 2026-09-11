import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { personal } from '../../core/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  hostDirectives: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'tile tile-2x1 tile-about' },
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly personal = personal;
}
