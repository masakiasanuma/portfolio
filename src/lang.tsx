import { makeObservable, observable } from 'mobx';

const en = {
    firstName: 'Masaki',
    lastName: 'Asanuma',
    status: 'Seeking entry positions for early 2023',
};

const jp = {
    firstName: '浅沼',
    lastName: '真樹',
    status: '2023年始のエンジニア職を探し中',
};

class Lang {
    lang: any;
    val: string;
    constructor() {
        makeObservable(this, {
            lang: observable,
        })
        this.lang = en;
        this.val = 'en';
    }

    getLang() {
        return this.lang;
    }

    setLang(value: string) {
        if (value === 'jp') {
            this.lang = jp;
            this.val = 'jp';
        } else {
            this.lang = en;
            this.val = 'en';
        }
    }

    getCurrLang() {
        return this.val;
    }
}

const LangState = new Lang();

export { LangState };