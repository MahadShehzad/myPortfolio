import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Identity } from './components/identity/identity';
import { About } from './components/about/about';
import { Meta } from './components/meta/meta';
import { Skills } from './components/skills/skills';
import { Services } from './components/services/services';
import { ProjectCard } from './components/project-card/project-card';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { projects, skillGroups } from './core/portfolio-data';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Identity, About, Meta, Skills, Services, ProjectCard, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly projects = projects;
  protected readonly skillsA = skillGroups.slice(0, 2);
  protected readonly skillsB = skillGroups.slice(2, 4);
}
