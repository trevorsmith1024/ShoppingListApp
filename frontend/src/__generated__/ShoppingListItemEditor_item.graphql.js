/**
 * @generated SignedSource<<43705897aa2990b4880ade805b5e8c69>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ShoppingListItemEditor_item$fragmentType: FragmentType;
export type ShoppingListItemEditor_item$ref = ShoppingListItemEditor_item$fragmentType;
export type ShoppingListItemEditor_item$data = {|
  +id: string,
  +name: string,
  +description: string,
  +count: number,
  +purchased: boolean,
  +$fragmentType: ShoppingListItemEditor_item$fragmentType,
|};
export type ShoppingListItemEditor_item = ShoppingListItemEditor_item$data;
export type ShoppingListItemEditor_item$key = {
  +$data?: ShoppingListItemEditor_item$data,
  +$fragmentSpreads: ShoppingListItemEditor_item$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShoppingListItemEditor_item",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "purchased",
      "storageKey": null
    }
  ],
  "type": "ShoppingListItem",
  "abstractKey": null
};

(node/*: any*/).hash = "1d2d9c1be1b13fa9146b79f2a79a1775";

module.exports = ((node/*: any*/)/*: Fragment<
  ShoppingListItemEditor_item$fragmentType,
  ShoppingListItemEditor_item$data,
>*/);
