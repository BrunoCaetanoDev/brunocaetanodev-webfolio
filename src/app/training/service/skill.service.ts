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
    springBoot.description='Framework for JAVA backend application development. The framework allows to easily bootstrap a standalone SPRING application, providing a wide range of features though the seemingly effortless third-party software integration, all while maintaining an model-view-controller layout.';
    springBoot.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545048191/spring-boot-logo.png';
    springBoot.score=4;
    springBoot.category=['backend','java','framework'];

    let angular = new Skill();
    angular.name='angular';
    angular.description='Angular is a cross-platform application development framework that supports modern application development for the web, mobile, or desktop environments. The Framework consists of an redesigned and enhanced version of Angular JS its core and new features have been completely redesigned using Typescript.';
    angular.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545048191/angular-logo.png';
    angular.score=4;
    angular.category=['frontend','typescript','framework'];

    let angularJs = new Skill();
    angularJs.name='angular js';
    angularJs.description=' Integer pretium laoreet ultrices. Donec laoreet ipsum nunc, ac vulputate nulla condimentum quis. Sed vitae orci eu lorem tempus faucibus at at metus. Mauris tincidunt velit in massa tempus maximus. Maecenas fermentum pharetra purus, id consectetur turpis. Proin ut eros metus. Vestibulum fringilla sagittis ipsum, vitae maximus massa porttitor condimentum. Aliquam interdum purus ipsum, eu lacinia sapien luctus vel. Aenean ac varius enim, in volutpat erat. Sed imperdiet dignissim orci eget accumsan. Sed viverra nunc vel tristique vestibulum. Maecenas ligula justo, rutrum quis ex ac, ornare iaculis elit. Curabitur rhoncus purus sed risus tristique, nec aliquam sem molestie. Nullam at dignissim nisi.\n' +
      '\n' +
      'Aliquam erat volutpat. In eget dolor lorem. Nunc eu ligula sit amet nulla aliquam volutpat non non ante. Ut id posuere ex. Mauris nisi lacus, viverra eu eleifend vitae, varius sed urna. Aenean dictum ligula non feugiat dapibus. Sed euismod lacus mauris, dignissim sagittis enim luctus sed. Integer finibus id tellus at laoreet. Etiam elit nibh, dignissim a mollis consectetur, feugiat id orci. Mauris dignissim porta cursus. Phasellus diam sem, fermentum sit amet augue quis, commodo bibendum justo. Donec sed enim bibendum, placerat libero vitae, lobortis odio. Phasellus vulputate erat sit amet nisi sodales, eu consequat lorem auctor. Nulla eu finibus augue. Vivamus condimentum consequat turpis. ';
    angularJs.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545062865/angularJS-logo.png';
    angularJs.score=3;
    angularJs.category=['frontend','javascript','framework'];

    let docker = new Skill();
    docker.name='docker';
    docker.description='A enterprise-ready container platform that enables a quick and efficient .';
    docker.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545068930/docker-logo.png';
    docker.score=3.5;
    docker.category=['CI&CD','dev-ops'];

    let jenkins = new Skill();
    jenkins.name='jenkins';
    jenkins.description='Sed elementum ligula sit amet fringilla bibendum. Aliquam tristique ipsum sit amet lobortis malesuada. Pellentesque ornare ipsum eget purus tempor blandit. In fringilla purus pharetra massa pellentesque, ut lacinia dolor suscipit. Curabitur porta lacus massa. Maecenas faucibus nec dolor non pretium. Fusce vel urna enim. Praesent vestibulum nunc ex, id porttitor ante bibendum quis. Nulla in malesuada orci. Duis eu mauris erat. Integer id tincidunt velit, sit amet ornare quam.';
    jenkins.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545066738/jenkins-logo.png';
    jenkins.score=3;
    jenkins.category=['CI&CD','dev-ops'];

    let redis = new Skill();
    redis.name='redis';
    redis.description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis placerat ipsum. Ut rhoncus posuere condimentum. Nunc ante elit, tincidunt sed urna vel, egestas efficitur arcu. Cras volutpat augue odio, ut viverra ligula tempor a. Fusce nisi massa, bibendum sit amet gravida at, lacinia id tellus. Ut bibendum tempor purus et vulputate. In eget lectus vitae libero dignissim ultrices quis a sem. Sed vitae suscipit erat. Morbi posuere sit amet neque vitae condimentum. Mauris pulvinar arcu non est dictum ultricies eget eget velit. Donec porta dolor massa, eu pharetra lorem aliquet id. Nulla maximus at eros et tristique. Maecenas vel convallis leo. Nullam ut convallis ex, id auctor sem.';
    redis.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545408597/redis-logo.png';
    redis.score=3;
    redis.category=['no sql', 'non relational database', 'database', 'message broker'];

    let git = new Skill();
    git.name='GIT';
    git.description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis placerat ipsum. Ut rhoncus posuere condimentum. Nunc ante elit, tincidunt sed urna vel, egestas efficitur arcu. Cras volutpat augue odio, ut viverra ligula tempor a. Fusce nisi massa, bibendum sit amet gravida at, lacinia id tellus. Ut bibendum tempor purus et vulputate. In eget lectus vitae libero dignissim ultrices quis a sem. Sed vitae suscipit erat. Morbi posuere sit amet neque vitae condimentum. Mauris pulvinar arcu non est dictum ultricies eget eget velit. Donec porta dolor massa, eu pharetra lorem aliquet id. Nulla maximus at eros et tristique. Maecenas vel convallis leo. Nullam ut convallis ex, id auctor sem.';
    git.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545409864/git.png';
    git.score=3;
    git.category=['VCS'];

    let svn = new Skill();
    svn.name='SVN';
    svn.description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis placerat ipsum. Ut rhoncus posuere condimentum. Nunc ante elit, tincidunt sed urna vel, egestas efficitur arcu. Cras volutpat augue odio, ut viverra ligula tempor a. Fusce nisi massa, bibendum sit amet gravida at, lacinia id tellus. Ut bibendum tempor purus et vulputate. In eget lectus vitae libero dignissim ultrices quis a sem. Sed vitae suscipit erat. Morbi posuere sit amet neque vitae condimentum. Mauris pulvinar arcu non est dictum ultricies eget eget velit. Donec porta dolor massa, eu pharetra lorem aliquet id. Nulla maximus at eros et tristique. Maecenas vel convallis leo. Nullam ut convallis ex, id auctor sem.';
    svn.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545410176/svn.png';
    svn.score=3;
    svn.category=['VCS'];

    let mysql = new Skill();
    mysql.name='MYSQL';
    mysql.description='asdas';
    mysql.image='https://res.cloudinary.com/dnku44rpm/image/upload/c_crop,w_1611/v1556362549/mysql-db.svg';
    mysql.score=4;
    mysql.category=['database', 'sql', 'relational database'];

    let oracledb = new Skill();
    oracledb.name='Oracle DB';
    oracledb.description='asdas';
    oracledb.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1556362833/oracle-data-replication-hvr-146768.png';
    oracledb.score=4;
    oracledb.category=['database', 'sql', 'relational database'];

    this._skills.push(springBoot);
    this._skills.push(angular);
    this._skills.push(angularJs);
    this._skills.push(docker);
    this._skills.push(jenkins);
    this._skills.push(redis);
    this._skills.push(git);
    this._skills.push(svn);
    this._skills.push(mysql);
    this._skills.push(oracledb);
  }

  get skills(): Skill[] {
    return this._skills;
  }

  set skills(value: Skill[]) {
    this._skills = value;
  }

}
