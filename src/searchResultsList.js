import {LightningElement, api} from "lwc";

export default class SearchResultsList extends LightningElement {
  @api
  name;

  @api
  label;

  @api
  fields;

  @api
  pageInfo;

  _results = [];

  defaultSortDirection = "asc";
  sortDirection = "asc";
  sortedBy;

  get results() {
      return this._results;
  }

  @api
  set results(value) {
      this._results = this.transformSearchResults(value);
  }

  /**
   * This code must be inside the component adapter wrapping the data table
   */
  transformSearchResults(searchResults){
      const copyData = [];

      for (let i = 0; i < searchResults.length; i++) {
          const result = searchResults[i];

          const fields = result.record.fields;
          const highligths = result.highlightInfo.fields;

          const outData =
          Object.fromEntries(
              Object.entries(fields)
              .map(e => {
                  const key = e[0]; // fieldName
                  let val = e[1].value;

                  // TODO highlight must be handled
                  if(highligths[key]){
                      val = highligths[key];
                  }

                  if(e[1].displayValue){
                      val = e[1].displayValue;
                  }

                  return [key, val]
              })
          );


          copyData.push(outData);
      }

      return copyData;
  }

   handleLoadMore(evt) {
        // TODO send offset and page size
        this.dispatchEvent(new CustomEvent('loadmore', {detail: {name: "juan"}}));
    }

    handleSort(evt){
       this.dispatchEvent(new CustomEvent('sort', {detail: {name: "juan"}}));
    }
}