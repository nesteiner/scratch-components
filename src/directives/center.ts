import {ObjectDirective} from "vue";

const center: ObjectDirective = {
    mounted: (el: HTMLElement) => {
        if (el.children.length != 1) {
            throw "[error] in Center there must be only one child"
        }
    }
}

export default center