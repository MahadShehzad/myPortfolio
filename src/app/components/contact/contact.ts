import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/reveal/reveal.directive';
import { Icon } from '../../shared/icon/icon';
import { WEB3FORMS_ACCESS_KEY, personal } from '../../core/portfolio-data';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, Icon],
  hostDirectives: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'tile tile-4x3 tile-contact', id: 'contact' },
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly personal = personal;
  protected readonly name = signal('');
  protected readonly senderEmail = signal('');
  protected readonly message = signal('');
  protected readonly status = signal<SubmitStatus>('idle');

  async submit(): Promise<void> {
    if (!this.name() || !this.senderEmail() || !this.message()) {
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      this.status.set('error');
      return;
    }

    this.status.set('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry from ${this.name()}`,
          from_name: this.name(),
          name: this.name(),
          email: this.senderEmail(),
          message: this.message(),
          to: this.personal.email,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        this.status.set('success');
        this.name.set('');
        this.senderEmail.set('');
        this.message.set('');
      } else {
        this.status.set('error');
      }
    } catch {
      this.status.set('error');
    }
  }
}
