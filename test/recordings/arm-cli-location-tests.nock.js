// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://api-dogfood.resources.windows-int.net:443')
  .get('/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers?&api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/Azure.CacheRP\",\"namespace\":\"Azure.CacheRP\",\"resourceTypes\":[{\"resourceType\":\"Redis\",\"locations\":[\"\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/biztalkservices\",\"namespace\":\"biztalkservices\",\"resourceTypes\":[{\"resourceType\":\"biztalk\",\"locations\":[\"\",\"centralus\",\"westeurope\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/documentdb\",\"namespace\":\"documentdb\",\"resourceTypes\":[{\"resourceType\":\"documentService\",\"locations\":[\"\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/Microsoft.Azure\",\"namespace\":\"Microsoft.Azure\",\"resourceTypes\":[{\"resourceType\":\"Redis\",\"locations\":[\"\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/Microsoft.Cache\",\"namespace\":\"Microsoft.Cache\",\"resourceTypes\":[{\"resourceType\":\"Redis\",\"locations\":[\"\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/microsoft.insights\",\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"alertrules\",\"locations\":[\"Central US\",\"East US\"]},{\"resourceType\":\"autoscalesettings\",\"locations\":[\"Central US\",\"East US\"]},{\"resourceType\":\"components\",\"locations\":[\"\",\"Central US\"]},{\"resourceType\":\"eventtypes\",\"locations\":[\"\"]},{\"resourceType\":\"metricDefinitions\",\"locations\":[\"\"]},{\"resourceType\":\"metrics\",\"locations\":[\"\"]},{\"resourceType\":\"webtests\",\"locations\":[\"\",\"Central US\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/Microsoft.Network\",\"namespace\":\"Microsoft.Network\",\"resourceTypes\":[{\"resourceType\":\"accessControlLists\",\"locations\":[\"centralus\",\"westeurope\"]},{\"resourceType\":\"loadBalancers\",\"locations\":[\"centralus\",\"westeurope\"]},{\"resourceType\":\"publicIPAddresses\",\"locations\":[\"centralus\",\"westeurope\"]},{\"resourceType\":\"Subnets\",\"locations\":[\"centralus\",\"westeurope\"]},{\"resourceType\":\"VirtualNetworks\",\"locations\":[\"centralus\",\"westeurope\"]},{\"resourceType\":\"virtualNetworks\",\"locations\":[\"centralus\",\"westeurope\"]},{\"resourceType\":\"vpnGateways\",\"locations\":[\"centralus\",\"westeurope\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/Microsoft.Sql\",\"namespace\":\"Microsoft.Sql\",\"resourceTypes\":[{\"resourceType\":\"servers\",\"locations\":[\"Northwest US\",\"West US\"]},{\"resourceType\":\"servers/databases\",\"locations\":[\"Northwest US\",\"West US\"]},{\"resourceType\":\"servers/firewallrules\",\"locations\":[\"\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/Microsoft.Storage\",\"namespace\":\"Microsoft.Storage\",\"resourceTypes\":[{\"resourceType\":\"storageAccounts\",\"locations\":[\"\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/microsoft.visualstudio\",\"namespace\":\"microsoft.visualstudio\",\"resourceTypes\":[{\"resourceType\":\"account\",\"locations\":[\"centralus\",\"North Central US\"]},{\"resourceType\":\"account/project\",\"locations\":[\"centralus\",\"North Central US\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/Microsoft.VisualStudio.Dev\",\"namespace\":\"Microsoft.VisualStudio.Dev\",\"resourceTypes\":[{\"resourceType\":\"account\",\"locations\":[\"North Central US\"]},{\"resourceType\":\"account/project\",\"locations\":[\"North Central US\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/microsoft.visualstudio.test\",\"namespace\":\"microsoft.visualstudio.test\",\"resourceTypes\":[{\"resourceType\":\"account\",\"locations\":[\"centralus\",\"North Central US\"]},{\"resourceType\":\"account/project\",\"locations\":[\"centralus\",\"North Central US\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/Microsoft.Web\",\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"certificates\",\"locations\":[\"\"]},{\"resourceType\":\"serverFarms\",\"locations\":[\"\"]},{\"resourceType\":\"sites\",\"locations\":[\"\"]}],\"registrationState\":\"NotRegistered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/SuccessBricks.ClearDB\",\"namespace\":\"SuccessBricks.ClearDB\",\"resourceTypes\":[{\"resourceType\":\"databases\",\"locations\":[\"North Europe\"]}],\"registrationState\":\"Registered\"},{\"id\":\"/subscriptions/c5f47aa3-5fd0-4410-a734-064e77d5dd94/providers/VisualStudio\",\"namespace\":\"VisualStudio\",\"resourceTypes\":[{\"resourceType\":\"account\",\"locations\":[\"centralus\"]},{\"resourceType\":\"account/project\",\"locations\":[\"centralus\"]}],\"registrationState\":\"NotRegistered\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd9af34cb-70bf-42fd-ae85-720310b4a498',
  'x-ms-correlation-request-id': 'd9af34cb-70bf-42fd-ae85-720310b4a498',
  'x-ms-routing-request-id': 'CENTRALUS:20140328T005856Z:d9af34cb-70bf-42fd-ae85-720310b4a498',
  date: 'Fri, 28 Mar 2014 00:58:56 GMT',
  'content-length': '4783' });
 return result; }]];