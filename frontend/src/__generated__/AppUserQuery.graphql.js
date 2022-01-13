/**
 * @generated SignedSource<<f37329a183d566be904afc27b38976a3>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppUserQuery$variables = {||};
export type AppUserQueryVariables = AppUserQuery$variables;
export type AppUserQuery$data = {|
  +user: ?{|
    +id: string,
    +name: ?string,
  |},
|};
export type AppUserQueryResponse = AppUserQuery$data;
export type AppUserQuery = {|
  variables: AppUserQueryVariables,
  response: AppUserQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "VXNlcjph"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": "user(id:\"VXNlcjph\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "43c649471d916290e7672f3566349b48",
    "id": null,
    "metadata": {},
    "name": "AppUserQuery",
    "operationKind": "query",
    "text": "query AppUserQuery {\n  user(id: \"VXNlcjph\") {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "eb69d104dd97eae94d3ebb35cbad25dc";

module.exports = ((node/*: any*/)/*: Query<
  AppUserQuery$variables,
  AppUserQuery$data,
>*/);
