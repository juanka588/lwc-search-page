import {LightningElement} from "lwc";
import askCall from "@salesforce/apex/RestController.askCall";
import extendAskCall from "@salesforce/apex/RestController.extendAskCall";

export default class SearchPage extends LightningElement {
    query = "";
    loadingResults = false;
    buckets = [];

    objectApiNames = [];
    selectedEntity;
    offset = 0;
    pageSize = 20;

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
        const isEnterKey = evt.keyCode === 13;
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
                let parse = JSON.parse(data);
                this.computeCols(parse, false);
                this.loadingResults = false;
            })
            .catch((error) => {
                console.error(error);
                this.loadingResults = false;
            });
    }

    fetchMoreEntities() {
        this.loadingResults = true;
        this.offset = this.offset + this.pageSize; // increment offset
        extendAskCall({
            query: this.query,
            offset: this.offset,
            pageSize: this.pageSize
        })
            .then((data) => {
                let parse = JSON.parse(data);
                this.computeCols(parse, true);
                this.loadingResults = false;
            })
            .catch((error) => {
                console.error(error);
                this.loadingResults = false;
            });
    }

    computeCols(parsedData, append) {
        let keywordBasedAnswer = parsedData.keywordBasedAnswer;
        let buckets = keywordBasedAnswer.buckets;
        if (buckets.length > 0) {
            const cmpBuckets = [];
            for (let i = 0; i < buckets.length; i++) {
                const bucket = buckets[i];

                const data = bucket.records;
                const entity = parsedData.searchEntityMetadata[bucket.entityApiName];
                entity.fields.forEach(f => f.fieldName = f.name); // add field name property
                cmpBuckets.push({name: bucket.entityApiName, label: entity.labelPlural, data: data, fields: entity.fields})
            }
            if (append) {
                this.buckets.push.apply(cmpBuckets);
            } else {
                this.buckets = cmpBuckets;
            }
        }

        let metadata = Object.entries(parsedData.searchEntityMetadata);

        const entities = metadata.map(e => {
            return {name: e[0], label: e[1].labelPlural}
        });

        this.allEntitiesCopy = keywordBasedAnswer.entitiesPageInfo.entities;

        if (append) {
            this.objectApiNames.push.apply(entities);
        } else {
            this.objectApiNames = entities;
        }
    }

    get hasMoreEntities() {
        return this.offset + this.objectApiNames.length < this.allEntitiesCopy.length;
    }

    get isScopedSearch() {
        return !this.isTopResults;
    }
}
