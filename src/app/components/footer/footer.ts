import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { navLinks, personal } from '../../core/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly personal = personal;
  protected readonly links = navLinks;
  protected readonly year = new Date().getFullYear();
}
