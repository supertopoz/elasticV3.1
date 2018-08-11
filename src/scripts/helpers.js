import axios from 'axios';

export const getAllClusters = (data) => ({
    allClusters: () => data
})

export const getClusterCount = (data) => ({
    countClusters: function() {
      this.All_Clusters.count = data.length;
      this.All_Clusters.clusters = data;
      return this;
    }
})

export const getUnhealthyClusters = (data) => ({
    unhealthyClusters: function() {
      const clusters =  data.filter((cluster) => !cluster.healthy )
      this.Unhealthy.count = clusters.length;
      this.Unhealthy.clusters = clusters;
      return this;
    }
})

export const getSnapshotFailed = (data) => ({
    snapshotFailed: function() {
      const clusters = data.filter((cluster) => !cluster.snapshots.healthy )
      this.Snapshot_failed.count = clusters.length;
      this.Snapshot_failed.clusters = clusters;
      return this;
    }
})

export const getShardErrors = (data) => ({
    shardErrors: function() {
      const clusters = data.filter((cluster) => !cluster.shards.healthy )
      this.Shard_Errors.count = clusters.length;
      this.Shard_Errors.clusters = clusters;
      return this;
    }
})

const configStepLookup = (cluster, term) => {
   return cluster.plan.configurationSteps
   .filter(item => item.type.indexOf(term) >= 0)
}

export const getRollBacks = (data) => ({
    rollback: function() {
      const rollbacks = data.filter((cluster) => configStepLookup(cluster, 'rollback').length > 0)
      this.Rollbacks.count = rollbacks.length;
      this.Rollbacks.clusters = rollbacks;
      return this;
    }
})

export const getBuildStepFailed = (data) => ({
    buildStepFailed: function() {
      const failed = data.filter((cluster) => configStepLookup(cluster, 'error').length > 0)
      this.Build_Step_Failed.count = failed.length;
      this.Build_Step_Failed.clusters = failed;
      return this;
    }
})

export const uiModel = (data) =>{
    let state = {
      "All_Clusters" : {count : 0, clusters: [] },
      "Unhealthy": {count : 0, clusters: [] },
      "Shard_Errors": {count : 0, clusters: [] },
      "Rollbacks": {count : 0, clusters: [] },
      "Build_Step_Failed": {count : 0, clusters: [] },
      "Snapshot_failed": {count : 0, clusters: [] }
    }
  return Object.assign(
    state, 
    getAllClusters(data),
    getClusterCount(data),
    getUnhealthyClusters(data),
    getShardErrors(data),
    getSnapshotFailed(data),
    getRollBacks(data),
    getBuildStepFailed(data)
    );
}

 export const createButtons =(model) =>{
      const buttons = Object.entries(model).reduce((arc,item) => { 
      const name = item[0]
      const obj = {};
      obj[name] = item[1]
      if(typeof item[1] !== 'function') arc.push(obj) 
        return arc
      },[])
      return buttons;
  }

  export const getData = () => {
      return new Promise((resolve, reject) =>{
        const url = "https://gist.githubusercontent.com/bevacqua/1225b9d6ae1842e99373c0057f5176b4/raw/dbfbe16c9b685af371827e4a550dde1188fa0dee/clusters.json";
        axios.get(url).then(data => {
          const model = uiModel(data.data.record);
          model.countClusters();
          model.unhealthyClusters();
          model.snapshotFailed();
          model.shardErrors();
          model.snapshotFailed();
          model.rollback();
          model.buildStepFailed();
          resolve(model);
        }) 
    })
  }