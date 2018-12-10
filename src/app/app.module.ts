import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';

import * as Hammer from 'hammerjs';

import { HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
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


export class MyHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y'
    });

    return mc;
  }
}

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
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
