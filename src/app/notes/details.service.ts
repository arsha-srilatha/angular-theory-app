import { Injectable } from '@angular/core';
import { Type1 } from './note-details/type1.model';
import { Type2 } from './note-details/type2.model';
import { Type3 } from './note-details/type3.model';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor() {}
  /*-------------------------
  Type1 - an independent topic with syntax and description.
  Type2 - a topic with multiple sub-topics each with it's own syntax and description.
  Type 3 - a topic that are classified to sub-topics that are complex and vast.
  */
  detailsType1: Type1[] = [
    new Type1(
      1,
      'Components',
      'Building blocks of an Angular application.',
      "@Component({\n\tselector:'app-game',\n\ttemplateUrl:'./game.component.html,'\n\tstyleUrls:['game.component.css'],\n\t\\\\encapsulation:ViewEncapsulation.Emulated\n})\nexport class GameComponent{}",
      [
        'GameComponent should be declared in AppModule.',
        'Used as <app-game></app-game> in HTML files.',
        'Use selector to nest components within components.',
        "Use 'template:`html content`' instead of 'templateUrl' to use inline template.",
        "Use 'styles: [`CSS styles`]' instead of 'styleUrls' to use inline styles.",
        'Use [app-game] instead to refer the component as an attribute.',
        'Use .app-game instead to refer the component as a class.',
        'Component decorator has another optional property named encapsulation which can update the ViewEncapsulation feature.',
        "View Encapsulation enables the style of a component to be within itself i.e. the component won't be affected by styles of other components which is the default behaviour(Emulated).",
      ],
      'ng generate component game / ng g c game'
    ),
    new Type1(
      1,
      'Services',
      'Acts like a centralized data storage which allows communication and data transfer among components.',
      "@Injectable()\nexport class DataService{..variables..functions}\n..\n@Component({\n\tselector:'app-game',\n\ttemplateUrl:'./game.component.html,'\n\tstyleUrls:['game.component.css'],\n\t\\\\providers:[DataService]\n})\nexport class GameComponent{\n\tconstructor(private data: DataService){}\n}",
      [
        'A service is simply a typescript class with a set of variables and functions that need to be shared by multiple components.',
        'Declaring it inside the providers of @Component decorator defines the scope of this instance. In example, the instance is available within the component.',
        'Providers array can have multiple service instances',
        "The service class is made available to a component by declaring it inside it's constructor as shown. This is called dependency injection.",
        'Dependency injection enables injecting those service instances to those components which depend on them.',
        "Injecting services as shown in the example would create an instance which can be shared by the corresponding component and it's child components i.e. the data of this instance cannot be updated by another outside component.",
        'Injecting services in providers of AppComponent would allow all the components to access the same service instance but not other services.',
        'Injecting services in providers of AppModule would allow same instance to be shared by the entire application.',
        'Thus, dependency injection is also a hierarchial injector.',
        '@Injectable before a service class indicates that it can be injected with other services. It is mandatory to provide them on all services that gets injected by other service instances.',
        'Adding @Injectable({providedIn: root}) indicates that the service instance is available application-wide and this also allows lazy loading of services, increasing performance of application.',
      ],
      'ng generate service data / ng g s data'
    ),
    new Type1(
      1,
      'Observables',
      'Various data sources that emit data on events, by http requests or when triggered in code.',
      'Create an observable\n const sampleObservable = \n\tObservable.create(observer => {\n\t\tobserver.next()..\n\t\tobserver.error\n\t\tobserver.complete()})\n\nOperators\n sampleObservable.pipe(\n\toperator(data => {..})\n\t).subscribe()\n\nSubjects\n emitData=new Subject<type>();',
      [
        'Observer listens to the observable that can handle the data, error or completion of data transmission.',
        'The subscribe() can be used to listen to an observable. For example: sampleObservable.subscribe(data => {data logic}, error => {error logic}, () => {completion logic}).',
        'An observable is part of RxJS package. It is required to import objects from this package if the observable is custom-made i.e. it is not an Angular observable.',
        'An interval() is a built-in observable that emits data after a pre-defined interval like interval(period:1000).subscribe((next: count)=> {..}).',
        'Use unsubsribe() to stop listening to the observable. As observer keeps on listening to the an observable unless it is an Angular observable like params, it is recommended to unsubscribe in ngOnDesztroy() to increase performance and save memory.',
        'It is recommended to store the observable in a Subscription variable.',
        'observer.next() would hold the logic to process the data. observer.error() would hold the logic to handle an error and throw custom errors while observer.complete() to handle the completion.',
        'An observable stops when either error() or complete() is called.',
        'Operators perform processing on the data which would be received by subscription, imported from rxjs/operators.',
        'Multiple operators can be added one after another like map, filter etc.',
        'Subjects, also part of RxJS, is an alternative to EventEmitter which is also similar to an observable.',
        'Use next() directly instead of emit() to listen to a subject which makes the subject active. Then, use subscribe() to listen to the subject.',
        'Use unsubsribe() to the subject whenever the value/ data emitted is not needed anymore to reduce memory leak.',
        'Use Eventemitter when using @Output but Subject can be used for cross-component communication via services.',
      ],
      'NA'
    ),
    new Type1(
      1,
      'Pipes',
      'Angular feature that transforms output in the template.',
      '<p>{{username | uppercase}}</p>,\n where username is a TS variable and\n\tuppercase is a built-in pipe',
      [
        "Pipes can be parameterized i.e.take out sepcific properties of pipe using a colon followed by the parameter. For example, variableName | date:'fullDate'.",
        "Multiple parameters can be added like property: 'parameter':'parameter'..and so on.",
        "Chaining pipes is done by adding | next property. The order of pipes is important as the output is parsed from left to right to display the output based on requirement. For example, variableName | date:'fullDate' | uppercase.",
        'Custom pipes - <any>.pipe.ts - is a TS class that implements an interface called PipeTransform which has the function transform(value, ..arguments) holding the custom logic.',
        'The Pipe class needs to be added in the AppModule -declarations array.',
        "The custom pipe class needs @Pipe({ name: 'pipe-name' }) which can be used in any template to transform the output.",
        'Any parameters needed for the custom pipe is added as arguments to the transform function and can be used in the template like in a built-in pipe.',
        'Angular pipe does not run transform everytime the data displayed changes, specifically changes in arrays or objects.',
        'In order make the pipe run everytime the data changes, add pure:false inside the @Pipe decorator.',
        'Care should be taken when creating an impure pipe as it may cause performance issues with large amount of data.',
        'Async data can be displayed in the template using {{data | async}}.',
      ],
      'ng generate pipe Name/ ng g p Name'
    ),
    new Type1(
      1,
      'Dynamic Components',
      'Components created programmatically- alternative to ngIf',
      'ViewContainerRefVariable.createComponent(DynamicComponentName)',
      [
        'Use a directive to mark the place in the template where the component needs to be created dynamically using ng-template.',
        'Access the container using ViewContainerRef in the directive.',
        'Use createComponent() function as shown in syntax to create any component dynamically by passing it as an argument and store it in a variable.',
        "Use instance property of this dynamic component to access it's properties or events.",
        'Use clear() function to remove the dynamic component created.',
        'Usage of entryComponents and componentFactoryResolver which were used to creatte such dynamic components are deprecated in v9 and v13 respectively.',
      ]
    ),
    new Type1(
      1,
      'Modules',
      'Bundles of similar building blocks like components, directives, services etc that represent an independent feature in an Angular application',
      '@NgModule([\n\tdeclarations:[components, directives, pipes etc],\n\timports:[other modules],\n\tproviders:[services]\n\tbootstrap:[root component(s)],\n\texports:[contents visible outside]\n])',
      [
        'An Angular application should have atleast one module i.e. AppModule which can be split into multiple feature modules.',
        'BrowserModule should be used once in the AppModule. Add CommonModule in all the other sub-modules to access features like ngIf, ngFor etc.',
        'Other modules used by the contents of a module should be imported, eventhough they are provided in AppModule. i.e. each module is standalone.',
        'Include the routes of a module in a feature-routing.module.ts in the same format as app-routing.module.ts except in imports add [RouterModule.forChild(featureRoutes)].',
        'If the components of a module are declared in the feature-routing.module.ts, then the components need not be added to exports of feature.module.ts. If there is no separate routingModule, then the components should be exported in addition to adding them in declarations array.',
        'A module can access only those components that are added in the declarations array or imports array. The declarations in any sub-module should not be added in the AppModule.',
        'Modules enable lazy loading i.e. loading the modules only when required and not when the app starts.',
        "Lazy loading can be implemented in AppRoutingModule by providing path:'name', loadChildren:() => import('path of feature module').then(m => FeatureModule). Also, the module should be removed from AppModule if imported.",
        "The feature routing module should be imported in the feature module. Also, the first component to be loaded should have path:'' inside the feature routing module.",
        'preLoadinghStrategy property can be used inside forRoots() to decide how or when the modules should be loaded unlike only loaded when the link is accessed by user which may or may not cause delay.',
        'Services provided in eager-loaded modules are available application (root injector) wide while in lazy-loaded modules, they are available only in the module (child injector). Providing services in AppModule is recommended unless the requirements ask for it.',
      ]
    ),
  ];
  detailsType2: Type2[] = [
    new Type2(
      2,
      'Databinding',
      'Communication between logic (ts code) and the template (html).',
      [
        {
          title: 'String Interpolation',
          syntax: '{{Typescript expression}}',
          example:
            '<div>{{selected}}</div>,\n where selected is a typescript variable.',
          description: [
            'Used in the html template to output data from ts code to template.',
            'The typescript expression should resolve to a string or a value that can be converted to a string.',
            'No multiline or control expressions are allowed except ternary expression.',
            'Can call a method which returns a string.',
          ],
        },
        {
          title: 'Property Binding',
          syntax: '[element property]="typescript expression"',
          example:
            '<button [disabled]="!selected">Click Me!</button>,\n where disabled is the property and \nselected is the boolean variable that sets the property value.',
          description: [
            'Used in html elements to output data from ts code to manipulate the element properties',
            'The typescript expression should evaluate into a value that matches the value type of the property to be managed.',
          ],
        },
        {
          title: 'Event Binding',
          syntax: '(event)="typescript expression"',
          example:
            '<button (click)="onClick()">Click Me!</button>,\n where click is the event and \nonClick is a typescript function.',
          description: [
            'Trigger events from html template to ts code to perform necessary actions.',
            'Passing $event as a function parameter would provide access to all the properties of that element inside ts code.',
          ],
        },
        {
          title: 'Two-way Databinding',
          syntax: '[(ngModel)]="typescript variable"',
          example:
            '<input [(ngModel)]="userValue">,\n where userValue is the typescript variable.',
          description: [
            'The value received by template is updated in the ts code simultaneously using ngModel directive.',
            'FormsModule must be declared in app.module.ts file to enable two-way databinding.',
          ],
        },
        {
          title: 'Custom Property Binding',
          syntax: "@Input('alias')property: type;",
          example:
            "@Input('srvElement')element: string;\n inside ElementComponent (<app-element>).\nIn AppComponent template,\n <app-element [srvElement]='value'></app-element>",
          description: [
            "Adding @Input('alias') before a variable exposes it to be accessed by other components using property binding.",
            "The alias is optional and the property value can be set using it's actual name.",
          ],
        },
        {
          title: 'Custom Event Binding',
          syntax:
            "@Output('alias')property = new EventEmitter<type of emitted data>;",
          example:
            "@Output('elmCreated')elementCreated = new EventEmitter<>string;\n onElementCreate(){this.elementCretead.emit('value')} \ninside ElementComponent (<app-element>).\nIn AppComponent template,\n <app-element (elmCreated)='elementAction($event)'></app-element>.\nIn AppComponent TS file,\nelementAction(emittedValue: string){..actions..}.",
          description: [
            "Adding @Output('alias') before a property exposes it to be treated by other components as an event using event binding.",
            'EventEmitter enables to emit the property inside any function.',
            "The alias is optional and the property value can be set using it's actual name.",
          ],
        },
        {
          title: 'Local Reference',
          syntax: '<element #reference>content</element>',
          example: "<input type='text' #userData>",
          description: [
            'Local reference names can be added to only any element in the template.',
            "It can be passed as a parameter to functions which can access the element and it's properties inside the TS code.",
            'This can be used as an alternative to two-way databinding i.e. ngModel.',
            'It is not recommended to update the values in DOM from TS code using this approach.',
          ],
        },
        {
          title: '@ViewChild',
          syntax:
            "@ViewChild({static:true},'reference/childcomponent') property",
          example:
            "@ViewChild('userData') userInput, where userData is a reference to an element in the template and userInput would hold the element object.",
          description: [
            'It provides another way of accessing an element via local reference or a component addd in the template directly from the TS code without passing it as an argument of a function.',
            'It is not recommended to update the values in DOM from TS code using this approach.',
            'In Angular 9+, it is recommended to use {statis:true} if the component or element is used inside ngOnInit function.',
          ],
        },
        {
          title: '@ContentChild',
          syntax: "@ContentChild({static:true},'reference') property",
          example:
            "@ContentChild('externData') externalData, where externData is a reference to an element in the projected content and externalData would hold the element object.",
          description: [
            'It provides another way of accessing an element in the projected content via local reference directly from the TS code.',
            'It is not recommended to update the values in DOM from TS code using this approach.',
            'In Angular 9+, it is recommended to use {statis:true} if the element is used inside ngOnInit function.',
          ],
        },
      ]
    ),
    new Type2(2, 'Directives', 'Instructions to the HTML DOM.', [
      {
        title: 'ngIf',
        syntax: '*ngIf="conditional statement"',
        example:
          '<p *ngIf="show==true">I am part of DOM</p>,\n where the element p is only created if the value of show is true.',
        description: [
          'ngIf is a structural directive that changes the DOM.',
          'The conditional statement should retuen a boolean value.',
          'ngIf creates or removes an element based on the boolean value.',
        ],
      },
      {
        title: 'ngIf-else',
        syntax: '*ngIf="conditional statement; else localMarker"',
        example:
          '<p *ngIf="show; else default">show is true</p>\n<ng-template #default>\n\t<p>show is false</p>\n</ng-template>\n where default is a local reference.',
        description: [
          'else provides an enhancement to ngIf by providing an alternate element to be part of DOM.',
          'Here, #default is the local reference to that element.',
          'Angular 17 provides a new syntax `@if(condition) {template}` in the Developer preview.',
        ],
      },
      {
        title: 'ngStyle',
        syntax: '[ngStyle]="{CSS property: typescript expression}"',
        example:
          '<p [ngStyle]="{color: getColor()}">Hello!</p>,\n where getColor() evaluates to a valid color value.',
        description: [
          'ngStyle is an attribute directive.',
          'The properties are defined as a JS object i.e. multiple CSS properties can be included.',
          'Updates the inline styling of an element based on a typescript expression.',
          'The expression should evaluate to a valid CSS property value.',
          'The expression can be a string, variable, a function call or a ternary expression.',
          'It is included in an element with property binding.',
        ],
      },
      {
        title: 'ngClass',
        syntax: '[ngClass]="{CSS class: boolean expression}"',
        example:
          '<p [ngClass]="{active: show==true}">Hello!</p>,\n where active is a CSS class which will be applied\n only when the variable show evaluates to true',
        description: [
          'ngClass is an attribute directive.',
          'Value is JS object with key as CSS class and value as a boolean expression.',
          'A class will only be applied if corresponding expression evaluates to true.',
          'It is included in an element with property binding.',
        ],
      },
      {
        title: 'ngFor',
        syntax: '*ngFor="let variable of array; let i=index"',
        example:
          '<p *ngFor="let item of items; let i=index">{{item}}</p>,\n where items is an array and \nitem and i are local variables.',
        description: [
          'ngFor is a structural directive.',
          'It iterates through an array of values and add the element with the array values in the DOM as much as the length by default.',
          'In the above example, if items array has 5 values, then 5 p elements will be added to the DOM with each value.',
          'let i=index allows to access the index value of the array and is optional.',
          'Angular 17 provides a new syntax `@for(variable of array, track variable.id) {template}` in the Developer preview.',
        ],
      },
      {
        title: 'ngSwitch',
        syntax:
          "<element[ngSwitch]=\"condition\">\n\t<child-element *ngSwitchCase='value1'></child-element>\n\t....\n\t<child-element *ngSwitchCase='valuen'></child-element>\n\t<child-element *ngSwitchDefault></child-element>\n</element>",
        example:
          "<div[ngSwitch]=\"value\">\n\t<p *ngSwitchCase='5'>Value=5</p>\n\t<p *ngSwitchCase='10'>Value=10</p>\n\t<p *ngSwitchCase='15'>Value=15</p>\n\t<p *ngSwitchDefault>Invalid</p></div>",
        description: [
          'ngSwitch is a structural directive that behaves like the normal switc-case-default.',
          'It checks the value of the switch condition against different cases and adds that template to the the DOM whwich matches the value.',
          'Otherwise, the template against default directive would be displayed.',
        ],
      },
      {
        title: 'ng-content',
        syntax: '<ng-content></ng-content>',
        example:
          '<app-game><p>Welcome</p></app-game> inside AppComponent. <ng-content></ng-content> inside app-game component.',
        description: [
          'Angular, by default, ignores any content that is provided inside a component selector.',
          'To access any content that is defined between the selector of a component, ng-content is used inside the component.',
          'This would project the content mentioned outside to be dispalyed inside the component.',
        ],
      },
      {
        title: 'Custom attribute directive',
        syntax:
          '@Directive({\n\tselector: [name]\n})\nexport class NameDirective {\n\tconstructor(element: ElementRef, render: Renderer2) {....}\n}',
        example:
          '@Directive({\n\tselector: [appHighlightGreen]\n})\n for class HighlightGreenDirective{ constructor(element: ElementRef, render: Renderer2)}.',
        description: [
          'The constructor of the directive class receives an object (element: ElementRef) which passes the element to which this attribute is added.',
          'Any property of the element can be updated directly by accessing the nativeElement using the reference recieved, preferrably in ngOnInit but is not a recommended practice.',
          "Standard way of updating an element is using the Renderer methods. For above example, ngOnInit() { this.render.setStyle(this.element.nativeElement, 'background-color', 'green'); } ",
          "@HostListener('event') eventFunction (event: Event) {...} can be used to update the element associated with any events like click or hover.",
          'Instead of using Renderer, another way is to use "@HostBinding(\'host property\') variable: type" to directly update the host property like a class variable.',
          'The host properties can be set from outside using @Input() & property binding to assign values to the HostBinding variable.',
        ],
      },
      {
        title: 'Custom structural directive',
        syntax:
          '@Directive({\n\tselector: [name]\n})\nexport class NameDirective {\n\tconstructor(template: TemplateRef, \n\t\tsvc: ViewContainerRef) {....}\n}',
        example:
          '@Directive({\n\tselector: [appUnless]\n})\n for class UnlessDirective{ constructor(template: TemplateRef, vc: ViewContainerRef)}.',
        description: [
          'Set the directive to check the condition and perform necessary actions using @Input. For example, @Input set appUnless(condition){..}.',
          'Use this condition to create or remove the template using functions of ViewContainerRef.',
          'Use this.vc.createEmbeddedView(this.template) to display the template to which the directive is attached to.',
          'Use this.vc.clear() to remove the template from DOM.',
        ],
      },
    ]),
    new Type2(
      2,
      'Routing',
      'Angular feature that allows navigation among components.',
      [
        {
          title: 'Routes variable',
          syntax:
            "const variableName: Routes = [\n\t{path: 'URL path', component: Componentname}...]",
          example:
            "const appRoutes: Routes = [\n\t{path: '', component: HomeComponent},\n\t {path: 'users', component: UsersComponent}]",
          description: [
            'The routes can be added as shown as an object with path name and the component to which it should navigate to.',
            'An empty path represents the first page the app should display when loaded.',
            'Add RouterModule.forRoots(appRoutes) inside imports of @NgModule() inside AppModule, if the above routes variable is added in AppModule.',
            'This declaration would allow navigation using url concatenation. For example, localhost:4200/users would load UsersComponent in the development browser.',
            'Add <router-outlet></router-outlet> in the template where the particular component needs to be loaded.',
            "Use {path: 'any path', redirectTo: ' already defined path'} to redirect the navigation to 'alreday defined path' when 'any path' is observed. For example, {path: 'error', component: ErrorComponent}, {path: 'not-found', redirectTo: '/error'} would load ErrorComponent when the URL is /error or /not-found.",
            "Use {path: '**', ...} to catch all routes that are not defined in the app. It is necessary to add this generic route at the end of the Routes array.",
            "As Angular matches path by prefix, it is sometimes required to use {path: 'any path', component: ComponentName, pathMatch: full} to ensure that the component is loaded only when the path is exactly the same as defined.",
            'To use routes as a separate module, add the routes varibale to a new module.ts file with RouterModule.forRoots(appRoutes) inside imports, RouterModule in exports and add the RoutingModule class inside imports of AppModule.',
            'Use RouterModule.forRoots(appRoutes, {useHash: true}) to let the server know that Angular would take care of the uRLs once the application is loaded.',
          ],
        },
        {
          title: 'RouterLinks',
          syntax:
            '<element[routerLink] ="[\'absolute/relative path\']" \n\trouterLinkActive="style-class"></element>',
          example:
            '<a [routerLink] ="[\'/users\']" routerLinkActive="button-active"></a>',
          description: [
            'The respective paths provided in the Routes variable should be added in the html template element as shown.',
            'This would allow navigation to the respective component when the element is clicked.',
            'Add routerLink="/users" can be used instead of property binding but the above syntax would allow enhancment of URL.',
            "Use '/' alone to navigate to the HomeComponent.",
            'The above navigation path would append it to the root. Without / would append the path to the currently loaded URL.',
            'routerLinkActive applies the style class to those tabs which is currently active.',
            'Adding routerLinkActive on the element that navigates to home page makes the element active throught as the empty path is also part of the whole path.',
            'Add [routerLinkActiveOptions]=[{exact: true}] to inform Angular to make a partcular element with routerLink active only if the entire path matches and not a part of it.',
          ],
        },
        {
          title: 'Programmatic Navigation',
          syntax: "ActivatedRouteVariable.navigate['absolute/relative path']",
          example:
            "customFunction(){\n\tthis.router.navigate(['/users'])}\n inside Component with \n constructor(private router: Router)",
          description: [
            'Navigation can be done from TS code by associating the element that should perform the navigation with a function as shown.',
            "Injecting an instance of ActivatedRoute i.e.constructor(private route: ActivatedRoute) can store all metadata regarding the current loaded path in the variable 'route'.",
            "Use this.router.navigate(['relative path'], { relativeTo: this.route }) if the path needs to be appended against the currently loaded path using the ActivatedRoute variable.",
          ],
        },
        {
          title: 'Route Parameters',
          syntax: "{path: 'path/:paramsVariable', component: ComponentName}",
          example: "{path: 'user/:id', component: UserComponent}",
          description: [
            'The route parameters are stored in variable after :. For example, user/1001 would load the UserComponent.',
            'The value after the hardcoded path would be stored in id i.e. 1001 will be stored in id.',
            'Multiple such parameter variables can be added to the path prefixed by :.',
            "The path user/1001/Arsha can be added in the template as [routerLink]=['/user', 1001, 'Arsha'].",
            "To fetch the value of the route parameters, use this.userId = this.route.snapshot.params['id'] inside the TS code. Add it on ngOnInit to fetch the value when the page is loaded, where route is the instance of type ActivatedRoute.",
            "In order to fetch the route parameters which may change while in the same component, add this.route.params.subscribe((params: Params) => {this userId = params['id'];});. This would allow the variable to change it's value whenever route parameters also chnage.",
            "The subscription to the observable params would live on throughout the active time of application. Use a Subscription variable to store this subscription, for example, sub: Subscription = this.route.params.subscribe((params: Params) => {this userId = params['id'];}); and add this.sub.unsubscribe() inside ngOnDestroy to stop the subscribtion while exiting from the component.",
          ],
        },
        {
          title: 'Query Parameters and Fragments',
          syntax:
            "In template,\n\t [queryParams]={key-value pairs}\n\t [fragment]=\"'value'\".\n\nIn code,\n\t Routervariable.naviagte(['path'], \n\t{queryParams: {key-value}, fragment: 'value'})",
          example:
            "<a [routerLink]=\"['user', 'edit']\" [queryParams]=\"{allowEdit: 'true'}\" [fragment]=\"'editing'\"></a>",
          description: [
            'Query params are followed by ? and fragments are followed by #.',
            'The application would navigate to the component that has the path /user/edit as per the example with the URL /user/edit/?allowEdit=true#editing when the above link is clicked.',
            'Use ActivatedRouteVariable.snapshot.queryParams and ActivatedRouteVariable.snapshot.fragment to fetch them one time when component is loaded.',
            'Use ActivatedRouteVariable.queryParams.subscribe() and ActivatedRouteVariable.fragment.subscribe() to get the updates of the URL.',
            "Use RouterVariable.navigate(['path'], {queryParamsHandling: 'merge/preserve'}) to configure the query params as required when navigating away from a component that has query params based on whether they need to be preserved or merged with the URL.",
          ],
        },
        {
          title: 'Nested Routes',
          syntax:
            "{path: 'path to Parent Component',\n\tcomponent: ParentComponent,\n\tchildren: [\n\t\t{path: 'path to ChildComponent',\n\t\tcomponent:ChildComponent}]}",
          example:
            "{path: 'users', component: UsersComponent, children: [ {path: '/user/edit'}, component: UserComponent]}",
          description: [
            'The child routes get appended to the parent route.',
            'Ensure <router-outlet> is added to the template of ParentComponent.',
          ],
        },
        {
          title: 'Guards',
          syntax:
            "{path: 'path', \n\tcanActivate/canDeactivate: [service for guard], \n\tcomponent: ComponentName}",
          example:
            "{path: '/user/edit', canActivate: [AuthGuard], component: UserComponent}",
          description: [
            'Guards are functionalities that are performed before - canActivate Guard and after - canDeactivate Guard navigating to a component.',
            'The CanActivate or CanDeactivate interface should be included in the service that performs the functions. For example, export class ServiceName implements canActivate',
            'These classes should have canActivate or canDeactivate functions.',
            'canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) returns Observable<boolean> | Promise<boolean> | boolean.',
            'canDeactivate(component: interface of canDeactivate function, currentroute: ActivatedRouteSnapshot, currentstate: RouterStateSnapshot, nextstate?: RouterStateSnapshot) that returns the same as canActivate()',
            'The interface in canDeactivate function ensures that the component that should be guarded also has a canDeactivate function that performs the action.',
            'These functions should include the logic for the functionalities that should be performed when navigating to or away from a component.',
            'Adding canActivate would be applied to the children components in the path as well.',
            'In order to protect just the child routes, add CanActivateChild interface to the service with canActivateChild function with same format as canActivate and canActivateChild:[AuthGuard] to the path of ParentComponent.',
          ],
        },
        {
          title: 'Passing Data',
          syntax:
            "{path: 'path', component: ComponentName, \n\tdata: [{key-value pairs of data}]}",
          example:
            "{path: '/error', component: ErrorComponent, data: [{message: 'Page Not Found!'}]}",
          description: [
            "The data can be accessed from the component using ActivatedRouteVariable.snapshot.data['property'] or ActivatedRouteVariable.data.subscribe((data: Data) => {....})",
            'The above example allows the transfer of static data whilenavigating.',
            'To pass dynamic data before a component is loaded is navigated, Resolve Guard is used.',
            'A resolve guard is also a service class that implements Resolve<type definition of data thta needs to be passed> interface.',
            'The resolve function also has two parameters - ActivatedRouteSnapshot and RouterStateSnapshot and include logic to fetch and process the data from the URL.',
            "Add {path: 'path', component: ComponentName, resolve: {property-name: ResolverService}} to the component from which should fetch data. This property would store the data that is processed by the ResolverService.",
          ],
        },
      ]
    ),
    new Type2(
      2,
      'HTTPClient',
      'Enables Angular-backend integration to fetch and store data whenever the app reloads.',
      [
        {
          title: 'Sending Http Requests',
          syntax:
            'HttpClientVariable<type>.\n\tHttpVerbFunction(arguments).\n\tsubscribe()',
          example:
            "this.http.post<{title:string, id: number}>('endpooint uri', request body).subscribe((response)=> {..})",
          description: [
            'HttpClientModule needs to be imported in AppModule.',
            'Inject an instance of Httpclient in the TS file which needs to handle Http requests.',
            'Http requests are managed by observables.',
            'Http requests are only send when they are subscribed.',
            'Use pipe operators to process the response as required like map. For example, this.http.post(...).pipe(map(...)).subscribe(...).',
            'If the http requests are in a separate service, return the observable from service and subscribe to it in the respective component.',
          ],
        },
        {
          title: 'Handling Errors',
          syntax:
            'HttpClientVariable<type>.\n\tHttpVerbFunction(arguments).\n\tsubscribe(data=> {...},\n\t\terror=> {...})',
          example:
            "this.http.post<{title:string, id: number}>('endpoint uri', request body).subscribe((response)=> {..}, error=> {..})",
          description: [
            'Error message can be fetched from the response body based on the type of backend that is used.',
            'The component can directly subscribe to error messages if the service returns an observable. Otherwise, use Subject in service for the error handling in the service to which the component subscribes to.',
            'catchError operator can be used inside the pipe function as an alternative with return throwError(error message).',
          ],
        },
        {
          title: 'Headers & Query Params',
          syntax:
            'HttpClientVariable<type>.\n\tHttpVerbFunction(url,\n\t\t {headers: new HttpHeaders,\n\t\t params: new HttpParams})....',
          example:
            "this.http.get('endpoint uri', {headers: new HttpHeaders({key-value pairs}), params: new HttpParams.set('key', 'value')}).",
          description: [
            'The headers are added as key-value pairs using HttpHeaders object.',
            'Query params can be directly set using set function as shown in the example.',
            'Multiple params can be appended to an array and can be provided as {...params: ParamsArray} inside the function.',
          ],
        },
        {
          title: 'Response',
          syntax:
            "HttpClientVariable<type>.\n\tHttpVerbFunction(url,\n\t\t {observe: '..',\n\t\tresponseType: '..'})..",
          example:
            "this.http.get('endpoint uri',{observe:'response', responseType: 'json'})",
          description: [
            'observe would modify the response to the application requirements.',
            'For example, providing response as above would return the entire response including status codes, headers, body etc. Using body would return response body.',
            'Using event would let the response data to be adjusted based on HttpEventType enum.',
            'The type of response can also be adjusted to text, json etc using responseType property',
          ],
        },
        {
          title: 'Interceptors',
          syntax:
            'intercept(req: HttpRequest<any>, \n\tnext: HttpHandler): Observable<HttpEvent<any>>',
          example: '',
          description: [
            'It is a service that implements HTTpInterceptor which includes intercept function.',
            'Implemented before the request is send from the app.',
            "Return next.handle(req) to ensure that the request continue it's journey",
            'Add {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi: true} inside providers[] of AppModule.',
            'Use req.clone({params/headers etc}) to append them before the request is sent and send next.handle(modifiedRequest)',
            'next.handle(req) is an observable to which pipe operators can be added to perform actions when the response is received.',
            'Multiple interceptors can be provided in the AppModule by adding similar JS object. They should be provided in the order in which the interceptors should be executed.',
          ],
        },
      ]
    ),
  ];

  detailsType3: Type3[] = [
    new Type3(
      3,
      'Forms',
      [
        'Angular processes the form submitted by user before sending it to the server.',
        'Angular can perform validations within and decide whether to submit the data or not.',
        'There are mainly 2 approaches in which Angular can handle form as shown.',
      ],
      [
        {
          topic: 'Template Driven',
          points: [
            {
              point: 'Registering Form Controls',
              syntax:
                '<input type="text" id="email" \n\tclass="form-control" ngModel name="email"/>',
              description: [
                ,
                "Angular forms need FormsModule which allows it to create a form representation on it's own when comes acroos a form element.",
                'Add ngModel and name=".." to each of the form elements that need to be registered in a form.',
              ],
            },
            {
              point: 'Submitting the Form',
              syntax: '<form (ngSubmit)="onSubmit(f)" #f="ngForm">',
              description: [
                'On clicking Submit button will trigger a one-time event called ngSubmit.',
                'The form as a JS object can be passed as an argument by adding a local reference as shown above.',
                'The parameter type would be of NgForm.',
                'This would give access to all the properties and values of the form.',
                'The form can also be accessed using @ViewChild instead of a function argument. This can help set certain form validators.',
              ],
            },
            {
              point: 'Angular Validators',
              syntax:
                '<input type="text" id="email" \n\tclass="form-control" ngModel \n\tname="email" \n\trequired email/>',
              description: [
                'In template-driven form, built-in Angular validators can be used directly in the template like required.',
                "Angular adds classes to each of the FormControl that indicates it's state like ng-touched, ng-valid etc, which can be used for styling based on different form state.",
                'For example, input.ng-invalid.ng-touched {border: 1px solid red;} would apply a red colour border if the input field is clicked and does not have a valid value.',
                'HTML validators are disabled by default, add ngNativeValidate to enable them.',
              ],
            },
            {
              point: 'Error Messages',
              syntax:
                '<input type="text" id="email" \n\tclass="form-control" ngModel \n\tname="email" \n\trequired email \n\t#email="ngModel"/>\n\n<p *ngIf="email.invalid \n\t&& email.touched">\n\tInvalid!!</p>',
              description: [
                'Add a local reference=ngModel to all those form elements that should be validated separately.',
                'Use properties like email.valid or email.touched etc for above example to decide whether error mesages should be shown using ngIF',
              ],
            },
            {
              point: 'ngModel',
              syntax:
                '<input type="text" id="email" \n\tclass="form-control" [ngModel]="test@example.com" \n\tname="email" \n\trequired email \n\t#email="ngModel"/>',
              description: [
                'Property binding in ngModel can be used to set default values for the form elements.',
                'Two-way binding is still valid in a template-driven form.',
              ],
            },
            {
              point: 'Grouping Form Elements',
              syntax:
                '<div ngModelGroup="userData"\n\t #userdata="ngModelGroup>\n\t....</div>"',
              description: [
                'The given example allows to create a group of form elements within a form object.',
              ],
            },
            {
              point: 'Form Data',
              syntax:
                "@ViewChild('f') \n\tprofileForm: NgForm;\nthis.userAdded = \n\tthis.profileForm.form.value.userData.username;",
              description: [
                'The form data can be accessed in the TS code as shown in example.',
                "this.profileForm.setValue({userData: {username: '...', userid: '...' }, gender: '..'}) allows setting the values of the entire form object. It always resets the values, if some of the values are already updated.",
                "this.profileForm.form.patchValue({userData: {username: '...'} allows updating parts of the form object) ",
                'this.profileForm.reset() allows the values to be reset.',
              ],
            },
          ],
        },
        {
          topic: 'Reactive',
          points: [
            {
              point: 'Creating the Form',
              syntax:
                "profileForm: FormGroup\n this.profileForm=\n\tnew FormGroup({\n\t\tusername: new FormControl('default value'),\n\t\temail: new FormControl(null)})",
              description: [
                'Angular forms need ReactiveFormsModule which allows it to create a form object programmatically.',
                'Create the form structure in the TS code as shown in the example format wherever deemed necessary.',
                'Add [formControl]="profileForm" to the form element and formControlName="property-name" to the respective form elements to sync the form with HTML.',
              ],
            },
            {
              point: 'Submitting the Form',
              syntax: '<form (ngSubmit)="onSubmit()"..',
              description: [
                'The form can be accessed directly within the TS code inside onSubmit() as profileForm as per the example',
              ],
            },
            {
              point: 'Form Validators',
              syntax:
                '....username: new FormControl(null, Validators.required)...\n..email: new FormControl(null, \n\t[Validator.required, Validator.email])',
              description: [
                'Validators can be added for each FormControl as shown as an array.',
                'Ensure that the validators are passed as a function reference i.e. without ().',
                "Use get('property').validator function to access the form validator values inside the template or TS code. For example, profileForm.get('username').required",
                "Errors can be checked for any validator using this.profileForm.get('..').errors['error property'] in the template.",
              ],
            },
            {
              point: 'Form Array',
              syntax:
                "Declaring in formGroup\n\t...hobbies: new FormArray([])\n\nInitializing \n\tconst item=new FormControl(..)\n\nAdding to array\n\t<FormArray>this.profileForm.\n\t\tget('hobbies').push(item)",
              description: [
                'FormArray stores an array of FormControls.',
                'Add formArrayName="hobbies" in the template',
                "Use controls in the template to loop through Form Array provided, get controls() { return (this.projectForm.get('tools') as FormArray).controls;} is present in the TS code.",
              ],
            },
            {
              point: 'Custom Validators',
              syntax:
                '...new FormControl(null, \n\t[Validators.required, this.check.bind(this)])\n\t where check(control:FormControl): {[s:string]: boolean} \n\tis the custom function in TS code.',
              description: [
                'The custom validator is a function that returns a key value pair of choice that acts a validation result of the control.',
                'In order to use the properties of the class inside this custom function, use bind(this) as shown in the example.',
                'Async functions can also be used as a custom validator but they have to be given in a separate array.',
              ],
            },
          ],
        },
      ]
    ),
  ];
}
