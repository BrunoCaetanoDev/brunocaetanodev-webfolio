import { Injectable } from '@angular/core';
import {Skill} from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private _skills :Skill [] = [];

  constructor() {
    let springBoot = new Skill();
    springBoot.name='spring boot';
    springBoot.description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dignissim facilisis. Proin posuere a enim eget lacinia. Cras eu metus fermentum erat sollicitudin feugiat. Aliquam ultrices felis ut ornare mollis. Donec eget tellus tincidunt, auctor turpis non, elementum mi. Aliquam cursus quis dolor vitae mollis. Aliquam mattis hendrerit faucibus. Suspendisse faucibus non odio et pulvinar. Etiam vel fermentum lorem, vel fermentum elit. Phasellus egestas nibh id est accumsan faucibus. Etiam porttitor sapien elit, at hendrerit arcu semper eget. Vivamus eu condimentum arcu, eu tempus neque. Morbi id finibus purus, nec hendrerit ligula. Suspendisse non dolor vulputate, semper diam eu, varius orci.';
    springBoot.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545048191/spring-boot-logo.png';
    springBoot.score=4.5;
    springBoot.type=['backend','java','framework'];

    let angular = new Skill();
    angular.name='angular';
    angular.description='Proin vel sem sodales, egestas justo nec, consequat dui. Aenean mollis scelerisque tempor. Donec interdum maximus risus, ac pellentesque dui tristique id. Cras commodo orci sit amet lorem gravida, vel pellentesque elit cursus. Donec rhoncus dolor ut mollis venenatis. Integer lacinia cursus nisi viverra lobortis. Nunc porttitor, eros sit amet semper dapibus, mi justo pulvinar lectus, nec dignissim mi tellus vel nulla. Ut vitae nibh nunc. Morbi vitae purus non metus laoreet convallis at a tellus. Fusce sed volutpat augue. Vestibulum lacinia maximus vehicula. Donec finibus quam pellentesque hendrerit bibendum. Fusce quam nibh, vehicula vitae leo in, consequat dignissim ligula. Aliquam consequat pulvinar ex at fermentum. Donec augue purus, scelerisque cursus odio quis, laoreet molestie purus. Cras eu risus leo. ';
    angular.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545048191/angular-logo.png';
    angular.score=4.0;
    angular.type=['frontend','typescript','framework'];

    let angularJs = new Skill();

    angularJs.name='angular js';
    angularJs.description=' Integer pretium laoreet ultrices. Donec laoreet ipsum nunc, ac vulputate nulla condimentum quis. Sed vitae orci eu lorem tempus faucibus at at metus. Mauris tincidunt velit in massa tempus maximus. Maecenas fermentum pharetra purus, id consectetur turpis. Proin ut eros metus. Vestibulum fringilla sagittis ipsum, vitae maximus massa porttitor condimentum. Aliquam interdum purus ipsum, eu lacinia sapien luctus vel. Aenean ac varius enim, in volutpat erat. Sed imperdiet dignissim orci eget accumsan. Sed viverra nunc vel tristique vestibulum. Maecenas ligula justo, rutrum quis ex ac, ornare iaculis elit. Curabitur rhoncus purus sed risus tristique, nec aliquam sem molestie. Nullam at dignissim nisi.\n' +
      '\n' +
      'Aliquam erat volutpat. In eget dolor lorem. Nunc eu ligula sit amet nulla aliquam volutpat non non ante. Ut id posuere ex. Mauris nisi lacus, viverra eu eleifend vitae, varius sed urna. Aenean dictum ligula non feugiat dapibus. Sed euismod lacus mauris, dignissim sagittis enim luctus sed. Integer finibus id tellus at laoreet. Etiam elit nibh, dignissim a mollis consectetur, feugiat id orci. Mauris dignissim porta cursus. Phasellus diam sem, fermentum sit amet augue quis, commodo bibendum justo. Donec sed enim bibendum, placerat libero vitae, lobortis odio. Phasellus vulputate erat sit amet nisi sodales, eu consequat lorem auctor. Nulla eu finibus augue. Vivamus condimentum consequat turpis. ';
    angularJs.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545048191/angular-logo.png';
    angularJs.score=3.0;
    angularJs.type=['frontend','javascript','framework'];

    this._skills.push(springBoot);
    this._skills.push(angular);
    this._skills.push(angularJs);
  }

  get skills(): Skill[] {
    return this._skills;
  }

  set skills(value: Skill[]) {
    this._skills = value;
  }

}
