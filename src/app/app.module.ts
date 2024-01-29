import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './pages/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './pages/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactoComponent,
    MenuComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
