/**
 * @generated SignedSource<<4f57760bae0355b9c7b5f0a2e9cf5b40>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type ShoppingList_list$fragmentType = any;
type UserComponent_user$fragmentType = any;
export type AppQuery$variables = {||};
export type AppQueryVariables = AppQuery$variables;
export type AppQuery$data = {|
  +user: ?{|
    +id: string,
    +name: ?string,
    +$fragmentSpreads: UserComponent_user$fragmentType,
  |},
  +viewer: ?{|
    +$fragmentSpreads: ShoppingList_list$fragmentType,
  |},
|};
export type AppQueryResponse = AppQuery$data;
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQuery$data,
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
    "name": "AppQuery",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShoppingList_list"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ShoppingListItem",
            "kind": "LinkedField",
            "name": "shoppingList",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "count",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "129cfb7838a601695b5bedc56dd3865b",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  user(id: \"VXNlcjph\") {\n    id\n    name\n    ...UserComponent_user\n  }\n  viewer {\n    ...ShoppingList_list\n  }\n}\n\nfragment ShoppingListItem_item on ShoppingListItem {\n  name\n  description\n  count\n}\n\nfragment ShoppingList_list on Viewer {\n  shoppingList {\n    id\n    ...ShoppingListItem_item\n  }\n}\n\nfragment UserComponent_user on User {\n  name\n}\n"
  }
};
})();

(node/*: any*/).hash = "566586f1a41c8f9b6bc66f04a864d8e0";

module.exports = ((node/*: any*/)/*: Query<
  AppQuery$variables,
  AppQuery$data,
>*/);
