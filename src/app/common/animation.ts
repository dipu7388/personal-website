import {trigger, transition, style,animate, query, stagger, keyframes} from '@angular/animations'

export const animations =
    trigger('exco', [
        transition('* => void', [
            style({ height: '*' }),
            animate('200ms ease-in-out', style({ height: '0' }))
        ]),
        transition('void => *', [
            style({ height: '0' }),
            animate('200ms ease-in-out', style({ height: '*' }))
        ])
    ])

export const lTor = trigger('lTor',[
    transition("void => *",[
        style({
            transform:'translateX(150px)',
            display: 'none',
            opacity:'0'   
        }),animate('0.25s ease-in',style({
            transform:'translateX(0px)',
            display: 'block',
            opacity:'1'
        }))
    ])   
])

export const fadeIn = trigger('fadeIn', [  //trigger name
    transition('* => *', [
      query(':enter', style({ opacity: 0 }), { optional: true }),
      query(':enter', stagger('5s', [animate('0.7s ease-out', keyframes([
        style({ opacity: 1, transform: 'translateY(-45px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(-35px)', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
      ]))]), { optional: true })
    ])
  ])