class HeapSortService {
    constructor(repository) {
      this.repository = repository;
    }
  
    heapSort(arr) {
      const n = arr.length;
  
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.heapify(arr, n, i);
      }
  
      for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        this.heapify(arr, i, 0);
      }
  
      return arr;
    }
  
    heapify(arr, n, i) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
  
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        this.heapify(arr, n, largest);
      }
    }
  
    sortData() {
      const data = this.repository.getData();
      return this.heapSort(data);
    }
  }