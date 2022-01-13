/**
 * @generated SignedSource<<0952c8cc1828eb69c8c7a3fb4899712b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type ShoppingListItemEditor_item$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type ShoppingListItem_item$fragmentType: FragmentType;
export type ShoppingListItem_item$ref = ShoppingListItem_item$fragmentType;
export type ShoppingListItem_item$data = {|
  +name: string,
  +description: string,
  +count: number,
  +$fragmentSpreads: ShoppingListItemEditor_item$fragmentType,
  +$fragmentType: ShoppingListItem_item$fragmentType,
|};
export type ShoppingListItem_item = ShoppingListItem_item$data;
export type ShoppingListItem_item$key = {
  +$data?: ShoppingListItem_item$data,
  +$fragmentSpreads: ShoppingListItem_item$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShoppingListItem_item",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShoppingListItemEditor_item"
    }
  ],
  "type": "ShoppingListItem",
  "abstractKey": null
};

(node/*: any*/).hash = "9f7c307be6a601e4250da77c47e6bfd1";

module.exports = ((node/*: any*/)/*: Fragment<
  ShoppingListItem_item$fragmentType,
  ShoppingListItem_item$data,
>*/);
