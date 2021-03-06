import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { HttpClientModule }         from '@angular/common/http';
import { FormsModule }              from '@angular/forms';


import { AppComponent }       from './app.component';
import { NavBarComponent }    from './components/nav-bar/nav-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { HomeComponent }      from './components/home/home.component';
import { ServicesComponent }  from './components/services/services.component';
import { GalleryComponent }   from './components/gallery/gallery.component';
import { ContactComponent }   from './components/contact/contact.component';

const appRoutes: Routes = [
  { path: 'home',     component: HomeComponent },
  { path: 'services',  component: ServicesComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'contact',  component: ContactComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    GalleryComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
