import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Pages

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
import { EditComponent } from './components/page/dashboard/edit/edit.component';

// Layout

import { ButtonComponent } from './components/layout/button/button.component';
import { ContentComponent } from './components/layout/content/content.component';
import { CardComponent } from './components/layout/card/card.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { CardsComponent } from './components/layout/cards/cards.component';
import { ImageComponent } from './components/layout/image/image.component';
import { GiteventComponent } from './components/layout/gitevent/gitevent.component';
import { NoticesComponent } from './components/layout/notices/notices.component';
import { NoticeComponent } from './components/layout/notice/notice.component';

// Custom

import { MarkdownModule } from 'ngx-markdown';
import { DashboardArticlesComponent } from './components/page/dashboard/article/dashboardArticles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ArticlesComponent,
    ArticleComponent,
    ContactComponent,
    ErrorComponent,
    LoginComponent,
    DashboardComponent,
    MediaComponent,
    EditComponent,
    ButtonComponent,
    NoticeComponent,
    ContentComponent,
    CardComponent,
    NavigationComponent,
    CardsComponent,
    ImageComponent,
    GiteventComponent,
    NoticesComponent,
    DashboardArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
