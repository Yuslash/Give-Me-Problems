function timeConversion(s) {
  let period = s.slice(-2)
  let hour = parseInt(s.slice(0, 2))
  let rest = s.slice(2, -2)

  if (period === "PM") {
    if (hour !== 12) {
      hour += 12
    }
  } else if (hour === 12) {
    hour = 0
  }

  console.log(hour)
  return `${hour.toString().padStart(2, '0')}${rest}`

}

console.log(timeConversion("07:05:45AM"))
