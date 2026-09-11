import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { ThemeSwitcher } from '../theme-switcher/theme-switcher';
import { navLinks, personal } from '../../core/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Icon, ThemeSwitcher],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly links = navLinks;
  protected readonly personal = personal;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }
}
