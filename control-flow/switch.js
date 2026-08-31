const months = [1, 3, 5, 7, 9, 11]

function getSeasonFromMonth(monthNum) {
  switch (monthNum) {
    case 1:
    case 2:
    case 12:
      return "winter"
    case 3:
    case 4:
    case 5:
      return "spring"
    case 6:
    case 7:
    case 8:
      return "summer"
    case 9:
    case 10:
    case 11:
      return "fall"
    default:
      return "invalid month"
  }
}

for (const month of months) {
  const season = getSeasonFromMonth(month)
  console.log(`Month ${month} is ${season}`)
}
