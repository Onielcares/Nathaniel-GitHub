class HeapSortController {
    constructor(heapSortService) {
      this.heapSortService = heapSortService;
    }
  
    sort(req, res) {
      const sortedData = this.heapSortService.sortData();
      res.json({ sortedData });
    }
  }