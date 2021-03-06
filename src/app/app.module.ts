import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Core
import { JwtInterceptor } from './core/authentication/jwt.interceptor';
import { ErrorInterceptor } from './core/http/error.interceptor';

// Modules
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// Compoenets
import { AppComponent } from './app.component';
import { SiteComponent } from './layout/site/site.component';

// reducer
import { cartReducer } from './shared/reducers/cart.reducer';
import { clientReducer } from './shared/reducers/client.reducer';


@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({
      cart: cartReducer,
      client: clientReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
