import Maths from './Math';

export default class Magician extends Maths {
  constructor(name, stoned, distance = 1) {
    super(name, 'Magician', 10, 40, stoned, distance);
  }
}
