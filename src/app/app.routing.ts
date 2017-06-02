import { Routes, RouterModule } from "@angular/router";

import {AppComponent} from "./app.component";
import {TestFirebaseComponent} from "./test-firebase/test-firebase.component";

const APP_ROUTES: Routes = [
    { path:'', redirectTo:'index',pathMatch:'full' },
    { path:'appcomponent', component:AppComponent },
    { path:'test', component:TestFirebaseComponent }
  
  
];
export const routing = RouterModule.forRoot(APP_ROUTES,{useHash: true});