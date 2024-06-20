#!/usr/bin/env groovy
@Library("jenkins-pipeline-library@automation") _
entry {
    isDryRun = false
    flow = "frontend"
    configInfo = [
                    deploymentGroup          : "aftership",
                    appName                  : "tracking-sdk-nodejs",
                    gitRepoName              : "tracking-sdk-nodejs.git",
                    chartName                : "",
                    essentialDockerImage     : "nodejs-essential",
                    essentialTag             : "nodejs-18.18.2",
                    requireStaticAsset       : false,
                    uploadAssetCredential    : "",
                    domainType               : "",
                    unitTest                 : "",
                    integrationTest          : "",
                    useEnvironmentVariable   : false,
                    hasStagingEnvironment    : false,
                    hasProductionEnvironment : true,
                    useNPM                   : false,
                    npmPackageOnly           : true,
                    prePublishScript         : "yarn build",
                    prePublishScript         : "",
                    optionsForAftershipPublish : ""
            ]
}
