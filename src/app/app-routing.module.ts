import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';
import { PostsComponent } from './pages/posts/posts.component';
import { CommentsComponent } from './pages/comments/comments.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'comments',
    component: CommentsComponent
  },
  {
    path:'**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
