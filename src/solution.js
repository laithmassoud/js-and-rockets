// Please implement your solution in this file
import dataJSON from '../fixtures/payload.json'; 


const noop = () => {
 fetch('https://api.spacexdata.com/v3/launches/past')
  .then((response) => response.json())
  .then(data => {
  const filterdData = data.map(item => ({ flight_number: item.flight_number, mission_name: item.mission_name, payloads_count: item.payloads_count }));
  console.log(filterdData);
  return filterdData;
  });
}

module.exports = {
  prepareData: noop,
  renderData: noop
};
