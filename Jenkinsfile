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
                    essentialTag             : "nodejs-16.13.0",
                    requireStaticAsset       : false,
                    uploadAssetCredential    : "",
                    domainType               : "",
                    unitTest                 : "yarn test",
                    integrationTest          : "test/integration_test.sh",
                    useEnvironmentVariable   : false,
                    hasStagingEnvironment    : false,
                    hasProductionEnvironment : true,
                    useNPM                   : true,
                    npmPackageOnly           : true,
                    prePublishScript         : "",
                    optionsForAftershipPublish : ""
            ]
}
