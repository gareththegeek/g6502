import { RangedComponent } from './RangedComponent'
import { Component } from './Component'

export interface Bus extends Component {
    attachComponentCommand: (rangedComponent: RangedComponent) => void
}
