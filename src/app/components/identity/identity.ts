import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { personal } from '../../core/portfolio-data';

@Component({
  selector: 'app-identity',
  standalone: true,
  imports: [],
  hostDirectives: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'tile tile-2x2 tile-identity', id: 'about' },
  templateUrl: './identity.html',
  styleUrl: './identity.scss',
})
export class Identity {
  protected readonly personal = personal;
}
