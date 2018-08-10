export const getAllClusters = (data) => ({
    allClusters: () => data
})

export const getClusterCount = (data) => ({
    countClusters: function() {
      this.All_Clusters.count = data.length;
      return this;
    }
})

export const getUnhealthyClusters = (data) => ({
    unhealthyClusters: function() {
      this.Unhealthy = data.filter((cluster) => cluster.healthy === false ).length
      return this;
    }
})

export const getSnapshotFailed = (data) => ({
    snapshotFailed: function() {
      this.Snapshot_failed = data.filter((cluster) => cluster.snapshots.healthy === false ).length
      return this;
    }
})

export const getShardErrors = (data) => ({
    shardErrors: function() {
      this.Shard_Errors = data.filter((cluster) => cluster.shards.healthy === false ).length
      return this;
    }
})

const configurationStepLookup = (cluster, term) => {
   return cluster.plan.configurationSteps.filter(item => {
      return item.type.indexOf(term) >= 0
    })
}


export const getRollBacks = (data) => ({
    rollback: function() {
      const rollbacks = data.filter((cluster) => {
        return configurationStepLookup(cluster, 'rollback').length > 0
      })
      this.Rollbacks = rollbacks.length;
      return this;
    }
})

export const getBuildStepFailed = (data) => ({
    buildStepFailed: function() {
      const failed = data.filter((cluster) => {
        return configurationStepLookup(cluster, 'error').length > 0
      })
      this.Build_Step_Failed = failed.length;
      return this;
    }
})

export const uiModel = (data) =>{
    let state = {
      "All_Clusters" : {count : 0 },
      "Unhealthy": 0,
      "Shard_Errors": 0,
      "Rollbacks" : 0,
      "Build_Step_Failed": 0,
      "Snapshot_failed": 0
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