import {RouterModule} from '@angular/router';
import { UserMaskMainComponent } from './user-mask-main/user-mask-main.component';

const routes =[{
  path : '',
  component : UserMaskMainComponent
}];

export const UserMaskRoutes = RouterModule.forChild(routes);