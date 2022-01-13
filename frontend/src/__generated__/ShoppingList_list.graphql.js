/**
 * @generated SignedSource<<2af440e849f4fdb7b20aa5ca1fba5358>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ShoppingList_list$fragmentType: FragmentType;
export type ShoppingList_list$ref = ShoppingList_list$fragmentType;
export type ShoppingList_list$data = {|
  +shoppingList: ?$ReadOnlyArray<?{|
    +name: ?string,
    +description: ?string,
    +count: ?number,
  |}>,
  +$fragmentType: ShoppingList_list$fragmentType,
|};
export type ShoppingList_list = ShoppingList_list$data;
export type ShoppingList_list$key = {
  +$data?: ShoppingList_list$data,
  +$fragmentSpreads: ShoppingList_list$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShoppingList_list",
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
  "type": "Viewer",
  "abstractKey": null
};

(node/*: any*/).hash = "a3f82e1bf6a6708ce1a34991a044389d";

module.exports = ((node/*: any*/)/*: Fragment<
  ShoppingList_list$fragmentType,
  ShoppingList_list$data,
>*/);
