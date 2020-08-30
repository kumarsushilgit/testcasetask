const services = require('./services');
const { getCars, getPeople } = services;


function datamapper() {

  this.getPersonsCars = async function getPersonsCars(personId) {
  return new Promise(async (resolve, reject) => {
    let result = { id: 0, name: '', cars: [] };
    let peoples = await new getPeople();
    if (peoples && Array.isArray(peoples) && peoples.length > 0){
      for (let i = 0; i <  peoples.length; i++){
        if (peoples[i].id === personId){
           result.id = peoples[i].id;
           result.name = peoples[i].name;
           result.cars = await carsDetails(peoples[i].cars.sort());
        }
      }
      resolve(result);
    }
  })
 }

 const carsDetails = async function carsDetails(carsId){
  return new Promise(async (resolve, reject) => {
    let cars = await new getCars();
    if (cars && Array.isArray(cars) && cars.length > 0){
      let carsName = [];
      for (let i = 0; i <  cars.length; i++){
        for (let j = 0; j < carsId.length; j++){
          if (cars[i].id === carsId[j]){

            carsName.push(cars[i].year + ' '+ cars[i].make + ' '+ cars[i].model);
         }
        }
      }

      resolve(carsName);
    }
  })
}
}

module.exports = datamapper;
