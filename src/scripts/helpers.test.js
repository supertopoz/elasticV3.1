import { uiModel, getClusters, getClusterCount } from "./helpers"
const dataSet = data.data.record;


describe('Check Model is correct shape', () => {
   let model;
   beforeAll(() => {
  	model = uiModel(dataSet);
   });
   afterAll(() => {})

  test('should get total number of clusters', () => {
  	const result = model.countClusters(); 
    expect(result.All_Clusters).toEqual({"count": 150});
  });
  test('should get unhealthy clusters', () => {
  	const result = model.unhealthyClusters(); 
    expect(result.Unhealthy.count).toEqual(17);
  });
  test('should get shard errors', () => {
  	const result = model.shardErrors(); 
    expect(result.Shard_Errors.count).toEqual(1);
  });
  test('should get rollbacks', () => {
  	const result = model.rollback(); 
    expect(result.Rollbacks.count).toEqual(1);
  });  
  test('should get build step failed', () => {
  	const result = model.buildStepFailed(); 
    expect(result.Build_Step_Failed.count).toEqual(1);
  });  
  test('should get snapshot failed', () => {
  	const result = model.snapshotFailed(); 
    expect(result.Snapshot_failed.count).toEqual(16);
  });
});