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
    springBoot.description='SPRING_DESCRIPTION';
    springBoot.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545048191/spring-boot-logo.png';
    springBoot.score=4.5;
    springBoot.category=['backend','java','framework'];

    let springCloud = new Skill();
    springCloud.name='spring cloud';
    springCloud.description='SPRING_CLOUD_DESCRIPTION';
    springCloud.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1602014655/spring-cloud-logo-removebg-preview.png';
    springCloud.score=3.5;
    springCloud.category=['backend','java','framework','cloud'];

    let angular = new Skill();
    angular.name='angular';
    angular.description='ANGULAR_DESCRIPTION';
    angular.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545048191/angular-logo.png';
    angular.score=3.5;
    angular.category=['frontend','typescript','framework'];

    let angularJs = new Skill();
    angularJs.name='angular js';
    angularJs.description='ANGULAR_JS_DESCRIPTION';
    angularJs.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545062865/angularJS-logo.png';
    angularJs.score=3;
    angularJs.category=['frontend','javascript','framework'];

    let docker = new Skill();
    docker.name='docker';
    docker.description='DOCKER_DESCRIPTION';
    docker.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545068930/docker-logo.png';
    docker.score=4;
    docker.category=['CI&CD','dev-ops'];

    let jenkins = new Skill();
    jenkins.name='jenkins';
    jenkins.description='JENKINS_DESCRIPTION';
    jenkins.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545066738/jenkins-logo.png';
    jenkins.score=3;
    jenkins.category=['CI&CD','dev-ops'];

    let mongo = new Skill();
    mongo.name='mongo db';
    mongo.description='MONGO_DESCRIPTION';
    mongo.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1573510346/1_DiNIG4Bfpm65_wwXf_JwMA.png';
    mongo.score=4;
    mongo.category=['no sql', 'non relational database', 'database'];


    let redis = new Skill();
    redis.name='redis';
    redis.description='REDIS_DESCRIPTION';
    redis.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545408597/redis-logo.png';
    redis.score=3.5;
    redis.category=['no sql', 'non relational database', 'database', 'message broker'];

    let git = new Skill();
    git.name='GIT';
    git.description='GIT_DESCRIPTION';
    git.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545409864/git.png';
    git.score=4;
    git.category=['VCS'];

    let svn = new Skill();
    svn.name='SVN';
    svn.description='SVN_DESCRIPTION';
    svn.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545410176/svn.png';
    svn.score=3;
    svn.category=['VCS'];

    let mysql = new Skill();
    mysql.name='MYSQL';
    mysql.description='MYSQL_DESCRIPTION';
    mysql.image='https://res.cloudinary.com/dnku44rpm/image/upload/c_crop,w_1611/v1556362549/mysql-db.svg';
    mysql.score=4;
    mysql.category=['database', 'sql', 'relational database'];

    let oracledb = new Skill();
    oracledb.name='Oracle DB';
    oracledb.description='ORACLE_DESCRIPTION';
    oracledb.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1556362833/oracle-data-replication-hvr-146768.png';
    oracledb.score=4;
    oracledb.category=['database', 'sql', 'relational database'];

    let aws = new Skill();
    aws.name='AWS';
    aws.description='AWS_DESCRIPTION';
    aws.image='https://res.cloudinary.com/dnku44rpm/image/upload/c_thumb,h_200,w_300/v1602014004/AWS_logo_RGB.png';
    aws.score=3;
    aws.category=['cloud','webservices'];

    this._skills.push(springBoot);
    this._skills.push(springCloud);
    this._skills.push(angular);
    this._skills.push(angularJs);
    this._skills.push(docker);
    this._skills.push(jenkins);
    this._skills.push(redis);
    this._skills.push(mongo);
    this._skills.push(git);
    this._skills.push(svn);
    this._skills.push(mysql);
    this._skills.push(oracledb);
    this._skills.push(aws);
  }

  get skills(): Skill[] {
    return this._skills;
  }

  set skills(value: Skill[]) {
    this._skills = value;
  }

}
