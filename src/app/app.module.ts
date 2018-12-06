import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
import { EditComponent } from './components/page/edit/edit.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
