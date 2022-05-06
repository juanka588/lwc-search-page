import {LightningElement} from "lwc";
import {askCall, entityScope} from "./mockServer";

export default class SearchPage extends LightningElement {
    query = "";
    loadingResults = false;
    buckets = [];

    objectApiNames = [];


    // used for scoped queries
    selectedEntity;
    
    offset = 0;
    pageSize = 20;

    // Buffer of loaded entities regarding navigation of possible matching entities
    allEntitiesCopy = [];
    isTopResults = true;


    handleSelect(evt) {
        let selectedEntity = evt.detail.name;
        console.log(selectedEntity);
        this.selectedEntity = selectedEntity;
        this.offset = 0;
        this.pageSize = 1;
        this.buckets = [];
        this.isTopResults = false;
        this.doQuery();
    }

    displayTopResults() {
        this.selectedEntity = undefined;
        this.isTopResults = true;
    }

    handleKeyUp(evt) {
        const isEnterKey = evt.keyCode === 13; // Enter code
        if (isEnterKey) {
            this.doQuery();
        }
    }

    updateSearchTerm(evt) {
        this.query = evt.target.value;
    }

    doQuery() {
        this.loadingResults = true;
        askCall({
            query: this.query,
            sobjectName: this.selectedEntity
        })
            .then((data) => {
                this.inflateResults(data, false);
                this.loadingResults = false;
            })
            .catch((error) => {
                console.error(error);
                this.loadingResults = false;
            });
    }

    loadMoreData(){
        // TODO detect once the all records were fetched
        console.log("fetching records");
    }

    /**
     * TODO call entity scope service
     */
    fetchMoreEntities() {
        this.loadingResults = true;
        this.offset = this.offset + this.pageSize; // increment offset
        entityScope({
            query: this.query,
            offset: this.offset,
            pageSize: this.pageSize
        })
            .then((data) => {
                this.inflateResults(data, true);
                this.loadingResults = false;
            })
            .catch((error) => {
                console.error(error);
                this.loadingResults = false;
            });
    }

    inflateResults(parsedData, append) {
        // TODO support NLS too
        const keywordBasedAnswer = parsedData.keywordBasedAnswer;
        const entities = keywordBasedAnswer.entities;
        if (entities.length > 0) {
            const cmpBuckets = [];
            for (let i = 0; i < entities.length; i++) {
                const entity = entities[i];
                
                const data = this.transformSearchResults(entity.searchResults);
                
                
                 // also the adapter is needed and the numOfMatchingRecords based on the pageInfo
                entity.count = data.length;

                if(data.length > 0){
                    entity.fieldsToReturn.forEach(f => f.fieldName = f.fieldApiName); // add field name property, this also must be done in the subcomponent adapter
                    cmpBuckets.push({name: entity.apiName, label: entity.labelPlural, data: data, fields: entity.fieldsToReturn});
                }
            }
            if (append) {
                this.buckets.push.apply(cmpBuckets);
            } else {
                this.buckets = cmpBuckets;
            }
        }

       
        // TODO re-implement this using the scope service passing the q parameter
        this.allEntitiesCopy = entities;

        if (append) {
            this.objectApiNames.push.apply(entities);
        } else {
            this.objectApiNames = entities;
        }
    }

    /**
     * This code must be inside the component adapter wrapping the data table
     */
    transformSearchResults(searchResults){
        const copyData = [];

        for (let i = 0; i < searchResults.length; i++) {
            const result = searchResults[i];

            const fields = result.record.fields;
            const highligths = result.metadata.fields;

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

    get hasMoreEntities() {
        return this.offset + this.objectApiNames.length < this.allEntitiesCopy.length;
    }

    get isScopedSearch() {
        return !this.isTopResults;
    }
    
}
