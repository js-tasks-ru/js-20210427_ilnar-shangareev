/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = "asc") {
  let arrSort = arr.slice().sort((a, b) => {
    return a.localeCompare(b, "ru-u-kf-upper");
  });

  if (param == "desc") {
    return arrSort.reverse();
  }

  return arrSort;
}
