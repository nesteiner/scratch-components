import {ObjectDirective} from "vue";

const stack: ObjectDirective = {
    mounted: (el: HTMLElement) => {
        let zIndexString = el.style.zIndex === "" ? "0" : el.style.zIndex
        let zIndex = parseInt(zIndexString)

        let start = 0;
        let end = el.childElementCount - 1

        while (start <= end) {
            let element = el.children.item(start) as HTMLElement
            element.style.zIndex = zIndex.toString()
            element.style.position = "absolute"
            zIndex += 1
            start += 1
        }
    }
}

export default stack