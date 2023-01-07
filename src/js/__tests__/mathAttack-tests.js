import Daemon from '../daemon';
import Magician from '../magician';
import Character from '../characters';

test('smallNameLength', () => {
  const received = () => new Character('O', 'Daemon');
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('bigNameLength', () => {
  const received = () => new Character('manyletters', 'Daemon');
  expect(received).toThrowError('Имя героя должно состоять от 2 до 10 символов.');
});

test('typeError', () => {
  const received = () => new Character('Name', 'Angel');
  expect(received).toThrowError('Выбранный тип не существует.');
});

test('attack + stoned', () => {
  const daemon = new Daemon('uicraor');
  daemon.stoned = true;
  daemon.attack = 100;
  daemon.distance = 2;
  expect(daemon.attack).toBe(85);
});

test('attack without stoned', () => {
  const magician = new Magician('Gendelf');
  magician.stoned = false;
  magician.attack = 200;
  magician.distance = 2;
  expect(magician.attack).toBe(180);
});
