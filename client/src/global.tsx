import dayjs from "dayjs";

export const levelExp = (lvl: number) => {
  return levels[lvl - 1];
};

let levels = [0];

export const level = () => {
  let exp = 300;
  for (let i = 0; i < 99; i++) {
    if (i % 3 === 0) exp += 210;
    else exp += 125;
    levels[i] = exp;
  }
};

export const daysInMonth = (m: number) => {
  let days = 0;
  let values: string[] = [];
  if (m === 1) days = 31;
  if (m === 2) {
    if (dayjs().year() % 4 === 0) {
      days = 29;
    }
    days = 28;
  }
  if (m === 3) days = 31;
  if (m === 4) days = 30;
  if (m === 5) days = 31;
  if (m === 6) days = 30;
  if (m === 7) days = 31;
  if (m === 8) days = 31;
  if (m === 9) days = 30;
  if (m === 10) days = 31;
  if (m === 11) days = 30;
  if (m === 12) days = 31;

  for (let i = 1; i <= days; i++) {
    let number = i;
    if (number < 10) {
      values.push("0" + i)
    }
    else values.push("" + i)
  }

  return values;
}

// prettier-ignore
// const levels = [
//     400, 600, 700, 800, 1000, 1100, 1200, 1400, 1500, 1600, // 1-10
//     1800, 1900, 2000, 2200, 2300, 2400, 2600, 2700, 2800, 3000, // 11-20
//     3100, 3200, 3400, 3500, 3600, 3800, 3900, 4000, 4200, 4300, // 21-30
//     4400, 4600, 4700, 4800, 5000, 5100, 5200, 5400, 5500, 5600, // 31-40
//     5800, 5900, 6000, 6200, 6300, 6400, 6600, 6700, 6800, 7000, // 41-50
//     7200, 7300, 7400, 7600, 7700, 7800, 8000, 8200, 8300, 8400, // 51-60
//     8600, 8700, 8800, 9000, 9100, 9200, 9400, 9500, 9600, 9800, // 61-70
//     9900, 10000, 10200, 10300, 10400, 10600, 10700, 10800, 11000, 11100, // 71-80
//     11200, 11400, 11500, 11600, 11800, 11900, 12000, 12200, 12300, 12400 // 81-90
// ];
