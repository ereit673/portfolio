import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectsList = [
    {
      name: 'Join',
      techUsed: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      appLink: '',
      gitLink: '',
      imgLink: 'assets/img/portfolio/join.png',
    },
    {
      name: 'El Pollo Loco',
      techUsed: 'JavaScript | HTML | CSS',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe find coins and salsa bottles to fight against the crazy chicken.',
      appLink: '',
      gitLink: '',
      imgLink: 'assets/img/portfolio/polloloco.png',
    },
    {
      name: 'Pokédex',
      techUsed: 'JavaScript | HTML | CSS | Api',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      appLink: '',
      gitLink: '',
      imgLink: 'assets/img/portfolio/pokedex.png',
    },
  ];
  constructor() {}
}
