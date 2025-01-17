import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent,
    },
    {
        component: ExplorePageComponent, 
        path: "explore/:country",
       
    },
    {
        path: "**",
        redirectTo: "",

    }
    
];

