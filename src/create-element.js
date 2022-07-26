export const createTextElement = (text) => ({
    type: "TEXT_ELEMENT",
    props: {
        nodeValue: text,
        children: []
    }
});

export const createElement = (type, props, ...children) => {
    console.log("this is didact's createElement");
    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === "object"
                    ? child
                    : createTextElement(child)
            )
        },
    }
}