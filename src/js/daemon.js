import Maths from './Math';

export default class Daemon extends Maths {
  constructor(name, stoned, distance = 1) {
    super(name, 'Daemon', 10, 40, stoned, distance);
  }
}
