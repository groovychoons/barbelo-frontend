import { Injectable } from '@angular/core';

import { Project } from './project';
import { MOCK_PROJECT_DATA } from '../MOCK_PROJECT_DATA';

@Injectable()
export class ProjectViewService {

	getProjects(): Project[] {
		return MOCK_PROJECT_DATA;
	}

	getProject(id: number): Project {
  		return this.getProjects().find(project => project.id === id);
	}

	constructor() { }

}