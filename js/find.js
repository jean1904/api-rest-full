module.exports = {
  filterIt: function(arr, searchKey) {
    searchKey = searchKey.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return arr.filter(function(obj) {
        return Object.keys(obj).some(function(key) {
          return obj[key].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(searchKey);
        })
      });
  }
}
