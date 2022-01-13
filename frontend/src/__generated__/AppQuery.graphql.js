/**
 * @generated SignedSource<<9a92911d0470f51cada9854b2518ee1b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type ShoppingList_list$fragmentType = any;
export type AppQuery$variables = {||};
export type AppQueryVariables = AppQuery$variables;
export type AppQuery$data = {|
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

var node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
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
              },
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
    "cacheID": "6cd716798ab453c9ae822940e1d6c551",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  viewer {\n    ...ShoppingList_list\n  }\n}\n\nfragment ShoppingListItemEditor_item on ShoppingListItem {\n  id\n  name\n  description\n  count\n}\n\nfragment ShoppingListItem_item on ShoppingListItem {\n  name\n  description\n  count\n  ...ShoppingListItemEditor_item\n}\n\nfragment ShoppingList_list on Viewer {\n  shoppingList {\n    id\n    ...ShoppingListItem_item\n  }\n}\n"
  }
};

(node/*: any*/).hash = "406a069cc05dc41ce8575ee5e4dc578a";

module.exports = ((node/*: any*/)/*: Query<
  AppQuery$variables,
  AppQuery$data,
>*/);
