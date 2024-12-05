let romans = {}

romans['I'] = 1
romans['V'] = 5
romans['X'] = 10
romans['L'] = 50
romans['C'] = 100
romans['D'] = 500
romans['M'] = 1000

let keys = Object.keys(romans)

for (let i = 0; i < keys.length; i++) {

  console.log(romans[keys[i]])

}

