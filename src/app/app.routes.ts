import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./pages/newsList/newsList.component').then(
        (m) => m.NewsListComponent
      ),
  },
  {
    path: 'news/:id',
    loadComponent: () =>
      import('./pages/newsDetail/newsDetail.component').then(
        (m) => m.NewsDetailComponent
      ),
  },
  {
    path: 'solution',
    loadComponent: () =>
      import('./pages/solution/solution.component').then(
        (m) => m.SolutionComponent
      ),
  },
  {
    path: 'solution/iot',
    loadComponent: () =>
      import('./pages/iotSolution/iotSolution.component').then(
        (m) => m.SolutionComponent
      ),
  },
  {
    path: 'solution/sp',
    loadComponent: () =>
      import('./pages/spSolution/spSolution.component').then(
        (m) => m.SolutionComponent
      ),
  },
  {
    path: 'solution/scada',
    loadComponent: () =>
      import('./pages/scadaSolution/scadaSolution.component').then(
        (m) => m.SolutionComponent
      ),
  },
];
