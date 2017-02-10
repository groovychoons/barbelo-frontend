import { Injectable } from '@angular/core';

import { Project } from './project';
import { MOCK_PROJECT_DATA } from '../MOCK_PROJECT_DATA';

@Injectable()
export class ProjectViewService {

	getProjects(): Promise<Project[]> {
		return Promise.resolve(MOCK_PROJECT_DATA);
	}

	getProject(id: number): Promise<Project> {
  		return this.getProjects()
             .then(projects => projects.find(project => project.id === id));
	}

	constructor() { }

}