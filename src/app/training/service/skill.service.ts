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
    springBoot.description='Spring is an open source Java8+ back-end framework. The Spring Boot a library embedded within Spring framework which enables the developer to quickly bootstrap a standalone application, providing a wide range of features though the seemingly effortless third-party software integration, all while maintaining an easily configurable architecture.';
    springBoot.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545048191/spring-boot-logo.png';
    springBoot.score=4;
    springBoot.category=['backend','java','framework'];

    let angular = new Skill();
    angular.name='angular';
    angular.description='Angular  is an open source TypeScript-based front-end web framework that supports modern cross-platform application development for the web, mobile, or desktop environments. The Framework consists of an redesigned and enhanced version of Angular JS its core and new features have been completely redesigned for the  Typescript language.';
    angular.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545048191/angular-logo.png';
    angular.score=4;
    angular.category=['frontend','typescript','framework'];

    let angularJs = new Skill();
    angularJs.name='angular js';
    angularJs.description='AngularJS is an open-source JavaScript-based front-end web framework maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.';
    angularJs.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545062865/angularJS-logo.png';
    angularJs.score=3;
    angularJs.category=['frontend','javascript','framework'];

    let docker = new Skill();
    docker.name='docker';
    docker.description='Docker is an enterprise-ready container platform that allows for a quick and efficient way to setup a complete E2E environment. Each container instance can be easily modified or horizontly scaled through the usage of the corresponding image, making the Docker engine a secure, lightweight and portable service provider available for both Linux and Windows-based applications, containerized software will always run the same, regardless of the baseline infrastructure';
    docker.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545068930/docker-logo.png';
    docker.score=3.5;
    docker.category=['CI&CD','dev-ops'];

    let jenkins = new Skill();
    jenkins.name='jenkins';
    jenkins.description='Jenkins is an open source and self-contained automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.';
    jenkins.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545066738/jenkins-logo.png';
    jenkins.score=3;
    jenkins.category=['CI&CD','dev-ops'];

    let redis = new Skill();
    redis.name='redis';
    redis.description='Redis is an open source, in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams';
    redis.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545408597/redis-logo.png';
    redis.score=3;
    redis.category=['no sql', 'non relational database', 'database', 'message broker'];

    let git = new Skill();
    git.name='GIT';
    git.description='Git is an open source distributed software version control system designed to handle everything from small to very large projects with speed and efficiency. It differentiates from the remaining SCM tools by providing with features like cheap local branching, convenient staging areas, and multiple workflows.';
    git.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545409864/git.png';
    git.score=3;
    git.category=['VCS'];

    let svn = new Skill();
    svn.name='SVN';
    svn.description='Apache Subversion or SVN is an open source distributed software version control systems developed under the Apache License. Software developers use Subversion to maintain current and historical versions of files such as source code, web pages, and documentation.';
    svn.image='https://res.cloudinary.com/dnku44rpm/image/upload/v1545410176/svn.png';
    svn.score=3;
    svn.category=['VCS'];

    let mysql = new Skill();
    mysql.name='MYSQL';
    mysql.description='MySQL is an open source object-relational database management system  software that powers the most demanding Web, E-commerce, SaaS and Online Transaction Processing (OLTP) applications. It is a fully integrated transaction-safe, ACID compliant database with full commit, rollback, crash recovery and row level locking capabilities. MySQL delivers the ease of use, scalability, and performance to power market players such as Facebook, Google, Twitter, Uber, and Booking.com.';
    mysql.image='https://res.cloudinary.com/dnku44rpm/image/upload/c_crop,w_1611/v1556362549/mysql-db.svg';
    mysql.score=4;
    mysql.category=['database', 'sql', 'relational database'];

    let oracledb = new Skill();
    oracledb.name='Oracle DB';
    oracledb.description='Oracle Database is an object-relational database management system developed and marketed by Oracle Corporation. Oracle is a fully scalable relational database architecture and is often used by global enterprises, which manage and process data across wide and local area networks. The Oracle database has its own network component to allow communications across networks.';
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
