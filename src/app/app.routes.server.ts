import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { 
    path: 'explore/:country', 
    renderMode: RenderMode.Prerender,
  },
  { path: '**', renderMode: RenderMode.Server }, // Depois
];
