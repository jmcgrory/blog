import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Pages

import { HomeComponent } from './components/page/home/home.component';
import { AboutComponent } from './components/page/about/about.component';
import { ArticlesComponent } from './components/page/articles/articles.component';
import { ArticleComponent } from './components/page/article/article.component';
import { ContactComponent } from './components/page/contact/contact.component';
import { ErrorComponent } from './components/page/error/error.component';

// Auth Pages

import { LoginComponent } from './components/page/login/login.component';
import { DashboardComponent } from './components/page/dashboard/dashboard.component';
import { MediaComponent } from './components/page/media/media.component';
import { EditComponent } from './components/page/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'article/:slug', component: ArticleComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
