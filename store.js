const storage = require('azure-storage')
const service = storage.createTableService()
const table = 'tasks'

var retryOperations = new azure.ExponentialRetryPolicyFilter();
var tasks = azure.createTableService().withFilter(retryOperations);

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}
