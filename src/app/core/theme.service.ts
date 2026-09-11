import { Injectable, effect, signal } from '@angular/core';

export interface ThemeOption {
  id: string;
  label: string;
  vibe: string;
  swatch: [string, string, string];
}

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly themes: ThemeOption[] = [
    { id: 'cobalt-blaze', label: 'Cobalt Blaze', vibe: 'Cobalt × amber', swatch: ['#3f7bff', '#ff9142', '#3f7bff'] },
    { id: 'citrus-punch', label: 'Citrus Punch', vibe: 'Lime × coral', swatch: ['#d4ff3f', '#ff4d4d', '#d4ff3f'] },
    { id: 'plum-rose', label: 'Plum Rose', vibe: 'Rose × gold', swatch: ['#ff3d7f', '#ffb703', '#ff3d7f'] },
    { id: 'forest-signal', label: 'Forest Signal', vibe: 'Signal green × sky', swatch: ['#7cff6b', '#2fd8ff', '#7cff6b'] },
    { id: 'ink-mono', label: 'Ink Mono+', vibe: 'Mono + one accent', swatch: ['#ff3b30', '#ff7a6e', '#ff3b30'] },
  ];

  readonly current = signal<string>(this.readInitial());

  constructor() {
    effect(() => {
      const id = this.current();
      document.documentElement.setAttribute('data-theme', id);
      try {
        localStorage.setItem(STORAGE_KEY, id);
      } catch {
        /* private-mode storage may be unavailable */
      }
    });
  }

  setTheme(id: string): void {
    this.current.set(id);
  }

  private readInitial(): string {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && this.themes.some((t) => t.id === saved)) {
        return saved;
      }
    } catch {
      /* ignore */
    }
    return 'cobalt-blaze';
  }
}
