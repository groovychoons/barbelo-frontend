import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Project } from './project';
import { ProjectViewService } from './project-view.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css'],
  providers: [ProjectViewService],
})

export class ProjectViewComponent implements OnInit {
	
	project = Project;

	constructor(
	private projectService: ProjectViewService,
	private route: ActivatedRoute,
	private location: Location
	) { }


	ngOnInit() {
    	this.route.params
    	.switchMap((params: Params) => this.projectService.getProject(+params['id']))
    	.subscribe(project => this.project = project);
  	}

}
