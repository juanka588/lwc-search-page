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
    pageSize = 5;

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
        this.doQuery();
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
            sobject: this.selectedEntity
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

    loadMoreData(evt){
        // TODO detect once the all records were fetched
        console.log("fetching records: " + evt);
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
        const entities = keywordBasedAnswer.searchObjects;
        if (entities.length > 0) {
            const cmpBuckets = [];
            for (let i = 0; i < entities.length; i++) {
                const entity = entities[i];
                
                const data = entity.searchResults;
                
                
                 // also the adapter is needed and the numOfMatchingRecords based on the pageInfo
                entity.count = data.length;

                if(data.length > 0){
                    entity.displayFields.forEach(f => f.fieldName = f.fieldApiName); // add field name property, this also must be done in the subcomponent adapter
                    cmpBuckets.push({name: entity.objectApiName, label: entity.labelPlural, results: data, fields: entity.displayFields, pageInfo: entity.pageInfo});
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

    sortResults(evt){
        console.log("sorting by" + evt);
    }


    get hasMoreEntities() {
        return this.offset + this.objectApiNames.length < this.allEntitiesCopy.length;
    }

    get isScopedSearch() {
        return !this.isTopResults;
    }
    
}
