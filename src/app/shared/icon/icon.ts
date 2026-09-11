import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'menu'
  | 'close'
  | 'external'
  | 'code'
  | 'send'
  | 'chevron-down'
  | 'palette'
  | 'layout'
  | 'component'
  | 'bolt'
  | 'download'
  | 'arrow-right';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      @switch (name()) {
        @case ('github') {
          <path
            fill="currentColor"
            stroke="none"
            d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z"
          />
        }
        @case ('linkedin') {
          <path
            fill="currentColor"
            stroke="none"
            d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"
          />
        }
        @case ('mail') {
          <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
          <path d="m3.5 6 8.5 7 8.5-7" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('external') {
          <path d="M14 5h5v5" />
          <path d="M19 5 10 14" />
          <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
        }
        @case ('code') {
          <path d="m9 8-4 4 4 4" />
          <path d="m15 8 4 4-4 4" />
        }
        @case ('send') {
          <path d="M4 4l16 8-16 8 4-8-4-8Z" />
        }
        @case ('chevron-down') {
          <path d="m6 9 6 6 6-6" />
        }
        @case ('palette') {
          <path
            d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.6 1.8-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8h1.7c2.1 0 3.7-1.6 3.7-3.7C20 6.6 16.4 3 12 3Z"
          />
          <circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="9.5" cy="7" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="14.5" cy="7" r="1.1" fill="currentColor" stroke="none" />
        }
        @case ('layout') {
          <rect x="3.5" y="4" width="17" height="16" rx="2" />
          <path d="M3.5 9.5h17M9 9.5V20" />
        }
        @case ('component') {
          <path d="m12 2 4 4-4 4-4-4 4-4Z" />
          <path d="m12 14 4 4-4 4-4-4 4-4Z" />
          <path d="m2 12 4-4 4 4-4 4-4-4Z" />
          <path d="m14 12 4-4 4 4-4 4-4-4Z" />
        }
        @case ('bolt') {
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        }
        @case ('download') {
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M4 21h16" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input<number>(20);
}
