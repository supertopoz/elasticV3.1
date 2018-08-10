


const getPlan =  (data) => data.map((item) => item.plan.configurationSteps)

const getConfigurationSteps = (data, rawData) => {
    const countData = {
    	totalSteps:0,
    	errors: []
    };
    data.forEach((cluster, index)=> {
      cluster.forEach((step, errorIndex) => {
        countData.totalSteps += 1;
        if(step.type === 'step-failed') countData.errors.push(rawData[index]);        
        if(countData[step.type]){          
          countData[step.type] +=1;
        } else {
          countData[step.type] = 1;
        }
      })     
    })
    return countData;
}

// const getErrors = () => {
//   // [
//   //       { 
//   //         name:"all clusters",
//   //         count: 0,
//   //         id: "allClusters"
//   //       }
//   //     ]
//   const errorMap = [{ 
//   	allClusters: "All Clusters",
//   	step-failed: "Build Step Failed",
//   	snapshot-failed: "Snapshot Failed"

//   }]
// }

const getAllClusters = (data) => ({
    allClusters: () => data
})


export const getErrors = (data) =>{
  // const rawData = data;
  // console.log('these are the errors:', getConfigurationSteps(getPlan(data), rawData));
    let state = {}
  return Object.assign(
    state, 
    getAllClusters(data)
    );
}