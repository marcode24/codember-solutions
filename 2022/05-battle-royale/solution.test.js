const getSurvive = require('./solution');

describe('getSurvive', () => {
  it('should return an string type', () => {
    const players = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    expect(typeof getSurvive(players)).toBe('string');
  });

  it('should return "Diana-100"', () => {
    const players = [
      'Gorusuke', 'DavidFabian', 'ItziarZG', 'edy WOLF', 'MarcosGaPe', 'Jose Jimenez',
      'Borja ', 'Jhonathan Izquierdo Higuita', 'MiLfeR322', 'Sebastián Espínola', 'Matias Luna',
      'Imanol Decima', 'MarcoCasula', 'MaríaBohórquez', 'Renan', "IvanL'olivier", 'Shonero',
      'Luichidev', 'Faviola Narvaez', 'Christopher Fuentes', 'Kuro', 'Juan Pablo Addeo',
      'Sergio Martínez', 'Fran Enriquez González', 'Diana', 'tictools', 'ConchaAsensio',
      'Emilio_Arreaza', 'novamix', 'Tomas Duclos', 'Elaya', 'Ignacio Palominos', 'David C.',
      'Gerardo Felipe Conrado', 'ElXuri', 'David Borja Martinez', 'JaviFelices', 'CarlesSànchez',
      'Gorusuke', 'DavidFabian', 'ItziarZG', 'edy WOLF', 'MarcosGaPe',
      'Jose Jimenez', 'Borja ', 'Jhonathan Izquierdo Higuita', 'MiLfeR322', 'Sebastián Espínola',
      'Matias Luna', 'Imanol Decima', 'MarcoCasula', 'MaríaBohórquez', 'Renan', "IvanL'olivier",
      'Shonero', 'Luichidev', 'Faviola Narvaez', 'Christopher Fuentes', 'Kuro', 'Juan Pablo Addeo',
      'Sergio Martínez', 'Fran Enriquez González', 'Diana', 'tictools', 'ConchaAsensio', 'Emilio_Arreaza',
      'novamix', 'Tomas Duclos', 'Elaya', 'Ignacio Palominos', 'David C.', 'Gerardo Felipe Conrado',
      'ElXuri', 'David Borja Martinez', 'JaviFelices', 'CarlesSànchez', 'Gorusuke', 'DavidFabian',
      'ItziarZG', 'edy WOLF', 'MarcosGaPe', 'Jose Jimenez', 'Borja ', 'Jhonathan Izquierdo Higuita', 'MiLfeR322',
      'Sebastián Espínola', 'Matias Luna', 'Imanol Decima', 'MarcoCasula', 'MaríaBohórquez', 'Renan', "IvanL'olivier",
      'Shonero', 'Luichidev', 'Faviola Narvaez', 'Christopher Fuentes', 'Kuro', 'Juan Pablo Addeo',
      'Sergio Martínez', 'Fran Enriquez González', 'Diana', 'tictools', 'ConchaAsensio', 'Emilio_Arreaza',
      'novamix', 'Tomas Duclos', 'Elaya', 'Ignacio Palominos', 'David C.', 'Gerardo Felipe Conrado',
      'ElXuri', 'David Borja Martinez', 'JaviFelices', 'CarlesSànchez',
    ];
    expect(getSurvive(players)).toBe('Diana-100');
  });
});
