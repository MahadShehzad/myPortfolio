import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { personal } from '../../core/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Icon],
  hostDirectives: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'tile tile-2x2 tile-hero tile-vivid', id: 'top' },
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  protected readonly personal = personal;
  protected readonly typed = signal('');
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.cycle(0, '', 'typing');
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private cycle(wordIndex: number, current: string, mode: 'typing' | 'pausing' | 'deleting'): void {
    const words = personal.taglines;
    const target = words[wordIndex % words.length];
    const speed = mode === 'typing' ? 85 : mode === 'deleting' ? 45 : 1400;

    this.timer = setTimeout(() => {
      if (mode === 'typing') {
        const next = target.slice(0, current.length + 1);
        this.typed.set(next);
        if (next === target) {
          this.cycle(wordIndex, next, 'pausing');
        } else {
          this.cycle(wordIndex, next, 'typing');
        }
      } else if (mode === 'pausing') {
        this.cycle(wordIndex, current, 'deleting');
      } else {
        const next = current.slice(0, -1);
        this.typed.set(next);
        if (next.length === 0) {
          this.cycle(wordIndex + 1, '', 'typing');
        } else {
          this.cycle(wordIndex, next, 'deleting');
        }
      }
    }, speed);
  }
}
