//truncateForScore will take the strings that JSONodds returns and convert them to common Scoreboard abbreviations
const truncateTeamName = string => {
  if(string === 'Miami Marlins') return 'MIA'
  else if(string === 'Chicago Cubs') return 'CHC'
  else if(string === 'St. Louis Cardinals') return 'STL'
  else if(string === 'New York Mets') return 'NYM'
  else if(string === 'Pittsburgh Pirates') return 'PIT'
  else if(string === 'Detroit Tigers') return 'DET'
  else if(string === 'Minnesota Twins') return 'MIN'
  else if(string === 'Baltimore Orioles') return 'BAL'
  else if(string === 'Houston Astros') return 'HOU'
  else if(string === 'Texas Rangers') return 'TEX'
  else if(string === 'New York Yankees') return 'NYY'
  else if(string === 'Toronto Blue Jays') return 'TOR'
  else if(string === 'Boston Red Sox') return 'BOS'
  else if(string === 'Tampa Bay Rays') return 'TB'
  else if(string === 'Los Angeles Angels') return 'LAA'
  else if(string === 'Oakland Athletics') return 'OAK'
  else if(string === 'Milwaukee Brewers') return 'MIL'
  else if(string === 'San Diego Padres') return 'SD'
  else if(string === 'Philadelphia Phillies') return 'PHI'
  else if(string === 'Atlanta Braves') return 'ATL'
  else if(string === 'Washington Nationals') return 'WSH'
  else if(string === 'Cincinnati Reds') return 'CIN'
  else if(string === 'Chicago White Sox') return 'CWS'
  else if(string === 'Kansas City Royals') return 'KC'
  else if(string === 'San Francisco Giants') return 'SF'
  else if(string === 'Los Angeles Dodgers') return 'LAD'
  else if(string === 'Colorado Rockies') return 'COL'
  else if(string === 'Arizona Diamondbacks') return 'ARI'
  else if(string === 'Cleveland Indians') return 'CLE'
  else if(string === 'Seattle Mariners') return 'SEA'
}

//convertTime will take the date/time string from JSONodds and convert it into an insatnce of JS Date
export const convertTime = string => {
  return new Date(string)
}

//processTime will take a date string in UTC time and convert it to a time string in EST time
export const processTime = dateString => {
  const date = convertTime(dateString)
  let hours = date.getHours()
  //subtract by 16 to convert first to 12 hour time and then an extra 4 to move to eastern standard time
  if(hours > 12) hours = hours - 16
  const minutes = date.getMinutes()
  return minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`
}

export const isInProgress = bet => {
  const date = new Date(bet.matchTime)
  const now = new Date()
  now.setHours(now.getHours() + 4)
  if(date - now < 0) return true
  return false
}

export const didHomeTeamWin = (bet, result) => {
  let homeScore = parseInt(result.HomeScore)
  let awayScore = parseInt(result.AwayScore)
  const odds = parseFloat(bet.odds)

  if(bet.playerPick === bet.homeTeam) homeScore += odds
  else awayScore += odds

  return homeScore > awayScore
}

const setWinner = (bet, result) => {
  if(didHomeTeamWin(bet, result)) return bet.homeTeam
  else return bet.awayTeam
}

export const settleBet = (bet, result) => {
  if(bet.playerPick === setWinner(bet, result)) {
    return { ...bet, result: result, playerWon: true }
  } else {
    return { ...bet, result: result , playerWon: false }
  }
}

export default truncateTeamName
