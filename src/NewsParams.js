class HeadLineParameter{
    constructor(){
        this._pageSize = 1
        this._page = 1
    }
    set country(c) {this._country = c}

    get country() {return this._country}

    set category(c) {this._category = c}

    get category() {return this._category}

    set sources(c) {this._sources = c}

    get sources() {return this._sources}
    
    set q(c) {
            	encodeURIComponent(c) != undefined ? this._q = encodeURIComponent(c) : this._q = undefined
            }
    get q() {return this._q}
    set pageSize(c) {this._pageSize = c}
    get pageSize() {return this._pageSize}
    set page(c) {this._page = c}
    get page() {return this._page}
    set language(c) {this._language = c}
    get language() {return this._language}
}

class EverythingParameter{
    constructor(){
        this._pageSize = 1
        this._page = 1

    }
    set q(c) {
        encodeURIComponent(c) != undefined ? this._q = encodeURIComponent(c) : this._q = undefined
    }
    get q() {return this._q}
    set sources(c) {this._sources = c}
    get sources() {return this._sources}
    set domains(c) {this._domains = c}
    get domains() {return this._domains}
    set excludeDomains(c) {this._excludeDomains = c}
    get excludeDomains() {return this._excludeDomains}
    set from(c) {this._from = c}
    get from() {return this._from}
    set to(c) {this._to = c}
    get to() {return this._to}
    set language(c) {this._language = c}
    get language() {return this._language}
    set sortBy(c) {this._sortBy = c}
    get sortBy() {return this._sortBy}
    set pageSize(c) {this._pageSize = c}
    get pageSize() {return this._pageSize}
    set page(c) {this._page = c}
    get page() {return this._page}
}
class SourcesParameter{
    constructor(){
        this._pageSize = 1
        this._page = 1
    }
    set country(c) {this._country = c}
    get country() {return this._country}
    set category(c) {this._category = c}
    get category() {return this._category}
    set language(c) {this._language = c}
    get language() {return this._language}
}

module.exports={
    HeadLineParameter,
    EverythingParameter,
    SourcesParameter
}