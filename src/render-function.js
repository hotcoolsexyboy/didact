export const render = (element, container) => {
    const newDomNode = element.type === "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type)

    const isProperty = key => key !== "children";

    Object.keys(element.props).filter(isProperty).forEach(name => {
        newDomNode[name] = element.props[name];
    })

    element.props.children.forEach(child =>
        render(child, newDomNode)
    )

    container.appendChild(newDomNode);
}