import {getColorsData} from './helpers/helper.js';

export const models = (allData) => {
    // Chart.defaults.color = '#fff';

     const uniqueModels = [...new Set(allData.map(element => element.especialidad))];

     
    /*const uniqueModels = allData.reduce((previous, current) => {
      const exist = previous.find(element => element === current.model);
      if (exist === undefined) {
        previous.push(current.model);
      }
      return previous;
    }, []);*/
  
    const amountsModels = uniqueModels.map( especialidad => allData.filter(element=> element.especialidad===especialidad).length);
  
    console.log(amountsModels);
    const dashboardModelsChart = document.getElementById('dashboardModelsChart');
    uniqueModels.innerHTML='';

    const data = {
      labels: uniqueModels,
      datasets: [{
        data: amountsModels,
        borderColor: getColorsData(),
        backgroundColor: getColorsData(40)
      }]
    };
  
    const options = {
      plugins: {
        legend: {
          position: 'left'
        }
      }
    }


    return new Chart(dashboardModelsChart, {
      type: 'doughnut',
      data,
      options
    });
  }
  
  export default models;