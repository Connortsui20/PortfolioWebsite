/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
        if (
            node &&
            !node.contains(event.target as Node) &&
            !event.defaultPrevented
        ) {
            node.dispatchEvent(new CustomEvent("outclick"));
        }
    };

    document.addEventListener("click", handleClick, true);

    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        },
    };
}
