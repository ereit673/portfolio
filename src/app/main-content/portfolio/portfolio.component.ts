import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../projects.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projectsService = inject(ProjectsService);
  projectsList;
  constructor(){
    this.projectsList = this.projectsService.projectsList;    
   }
}
