import moment from "moment";

const data = [];
for (let month = moment('2017-02'), count = 130; month.isBefore('2020-05'); month.add(1, 'month')) {
  data.push({ month: month.unix(), count: Math.round(count *= 1.3) });
}

export default data;
