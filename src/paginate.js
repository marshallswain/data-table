var Paginate = can.Map.extend({
  count: Infinity,
  offset: 0,
  limit: 5,
  next: function () {
    this.attr('offset', this.offset + this.limit);
  },
  prev: function () {
    this.attr('offset', this.offset - this.limit);
  },
  setOffset: function (newOffset) {
    return newOffset < 0 ?
      0 :
      Math.min(newOffset, !isNaN(this.count - 1) ?
        this.count - 1 :
        Infinity);
  },
  setCount: function (newCount, success, error) {
    return newCount < 0 ? 0 : newCount;
  },
  canNext: function () {
    return this.attr('offset') < this.attr('count') -
      this.attr('limit');
  },
  canPrev: function () {
    return this.attr('offset') > 0;
  },
  page: function (newVal) {
    if (newVal === undefined) {
      return Math.floor(this.attr('offset') / this.attr('limit')) + 1;
    } else {
      this.attr('offset', (parseInt(newVal, 10) - 1) * this.attr('limit'));
    }
  },
  pageCount: function () {
    return this.attr('count') ?
      Math.ceil(this.attr('count') / this.attr('limit')) : null;
  }
});