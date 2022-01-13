/**
 * @generated SignedSource<<8346a0e2d21bf56c23c48650ccb7df0b>>
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
  +name: ?string,
  +description: ?string,
  +count: ?number,
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
  "type": "ShoppingListItem",
  "abstractKey": null
};

(node/*: any*/).hash = "06c6be0b836320e21e421d94220f3f46";

module.exports = ((node/*: any*/)/*: Fragment<
  ShoppingListItemEditor_item$fragmentType,
  ShoppingListItemEditor_item$data,
>*/);
