import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app-router.module';
import { ProfileComponent } from './profile/profile.component';
import { CareerComponent } from './career/career.component';
import { TrainingComponent } from './training/training.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import {TranslateService} from './translate.service';
import { TranslatePipe } from './translate.pipe';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    CareerComponent,
    TrainingComponent,
    ContactInfoComponent,
    TranslatePipe
  ],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [
    TranslateService, {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
