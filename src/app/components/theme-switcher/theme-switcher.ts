import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  protected readonly themeService = inject(ThemeService);
  private readonly host = inject(ElementRef<HTMLElement>);
  protected readonly open = signal(false);

  toggle(): void {
    this.open.update((v) => !v);
  }

  select(id: string): void {
    this.themeService.setTheme(id);
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.open() && !this.host.nativeElement.contains(event.target as Node)) {
      this.open.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.open.set(false);
  }
}
