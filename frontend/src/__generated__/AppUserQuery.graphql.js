/**
 * @generated SignedSource<<5dee8aa4595ef18f4583d5b301068f74>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type UserComponent_user$fragmentType = any;
export type AppUserQuery$variables = {||};
export type AppUserQueryVariables = AppUserQuery$variables;
export type AppUserQuery$data = {|
  +user: ?{|
    +id: string,
    +name: ?string,
    +$fragmentSpreads: UserComponent_user$fragmentType,
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
    "kind": "Literal",
    "name": "id",
    "value": "VXNlcjph"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserComponent_user"
          }
        ],
        "storageKey": "user(id:\"VXNlcjph\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppUserQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "user(id:\"VXNlcjph\")"
      }
    ]
  },
  "params": {
    "cacheID": "5afe3df1a36107415b4b80cce2278c6a",
    "id": null,
    "metadata": {},
    "name": "AppUserQuery",
    "operationKind": "query",
    "text": "query AppUserQuery {\n  user(id: \"VXNlcjph\") {\n    id\n    name\n    ...UserComponent_user\n  }\n}\n\nfragment UserComponent_user on User {\n  name\n}\n"
  }
};
})();

(node/*: any*/).hash = "a7b33a8685f7f85f445298186975552e";

module.exports = ((node/*: any*/)/*: Query<
  AppUserQuery$variables,
  AppUserQuery$data,
>*/);
