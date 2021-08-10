/**
 * @Method: Returns the plural form of any noun.
 * @Param {any}
 * @Return {any}
 */
export function bubbleSort(listToSort: any[]): any[] {
  for (let i = 0; i < listToSort.length; i++) {
    for (let j = i + 1; j < listToSort.length; j++) {
      if (listToSort[i] > listToSort[j]) {
        let swap = listToSort[j];
        listToSort[j] = listToSort[i];
        listToSort[i] = swap;
      }
    }
  }

  return listToSort;
}
