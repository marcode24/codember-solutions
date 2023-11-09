const getSurvive = (players) => {
  players = players.map((player, index) => ({ player, index }));
  let survive = [...players];
  while (survive.length > 1) {
    for (let i = 0; i < survive.length; i++) {
      if (i === survive.length - 1 && survive.length % 2 !== 0) {
        players.splice(0, 1);
      } else {
        players.splice(i + 1, 1);
      }
    }
    survive = [...players];
  }
  const { player, index } = players[0];
  return `${player}-${index}`;
};

module.exports = getSurvive;
