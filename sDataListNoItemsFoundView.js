/**
 * A view for when no items are found in a data source.
 * @constructor
 * @returns {sDataListNoItemsFoundView} The view.
 */
var sDataListNoItemsFoundView = function () {
  this.parent.constructor.call(this);
  this._DOMElement = sDoc.newElement('li');
  this._DOMElement.className = 'sdata-list-no-items-found';
  this._DOMElement.innerHTML = 'No items found.';
  return this;
};
sDataListNoItemsFoundView.prototype = new sDataListItem({});
sDataListNoItemsFoundView.prototype.parent = sDataListItem.prototype;
