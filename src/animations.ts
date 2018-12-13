import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const fadeAnimation =
  trigger('fadeAnimation', [

    transition( '* => *', [

      query(':enter',
        [
          style({ opacity: 0 })
          ]
      ),

      query(':leave',
        [
          style({ opacity: 1 }),
          animate(500),
          style({ opacity: 0 }),
        ]
      ),

      query(':enter',
        [
          style({ opacity: 0 }),
          animate(500),
          style({ opacity: 1 })
        ]
      )

    ])

  ]);

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ top: '-100%'})
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ top: '100%'}))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ top: '0%'}))
        ], { optional: true })
      ]),
      query(':enter', animateChild(), { optional: true }),
    ])
  ]);
