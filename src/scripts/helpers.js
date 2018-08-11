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
      const clusters =  data.filter((cluster) => cluster.healthy === false )
      this.Unhealthy.count = clusters.length;
      this.Unhealthy.clusters = clusters;
      return this;
    }
})

export const getSnapshotFailed = (data) => ({
    snapshotFailed: function() {
      const clusters = data.filter((cluster) => cluster.snapshots.healthy === false )
      this.Snapshot_failed.count = clusters.length;
      this.Snapshot_failed.clusters = clusters;
      return this;
    }
})

export const getShardErrors = (data) => ({
    shardErrors: function() {
      const clusters = data.filter((cluster) => cluster.shards.healthy === false )
      this.Shard_Errors.count = clusters.length;
      this.Shard_Errors.clusters = clusters;
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
      this.Rollbacks.count = rollbacks.length;
      this.Rollbacks.clusters = rollbacks;
      return this;
    }
})

export const getBuildStepFailed = (data) => ({
    buildStepFailed: function() {
      const failed = data.filter((cluster) => {
        return configurationStepLookup(cluster, 'error').length > 0
      })
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