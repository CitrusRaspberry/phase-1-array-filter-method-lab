function findMatching(drivers, name) {
  return drivers.filter( driver => driver.toLowerCase() === name.toLowerCase() )
}

function fuzzyMatch(drivers, search) {
  return drivers.filter( driver => driver.indexOf(search) === 0 );
}

function matchName(drivers, name) {
  return drivers.filter( driver => driver.name === name );
}
