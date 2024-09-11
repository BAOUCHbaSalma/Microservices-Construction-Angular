import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Auth/login/login.component';
import { RegistreComponent } from './Auth/registre/registre.component';
import { AdminTestComponent } from './admin-test/admin-test.component';
import { CostumerTestComponent } from './costumer-test/costumer-test.component';
import { IntercepteurService } from './service/intercepteur/intercepteur.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    AdminTestComponent,
    CostumerTestComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: IntercepteurService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
