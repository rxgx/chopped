function merge(obj1, obj2) {
    var result = {};
    for (var prop in obj1) result[prop] = obj1[prop];
    for (var prop in obj2) result[prop] = obj2[prop];
    return result;
}

var inlineMixin = {
    display: "inline-block",
    verticalAlign: "middle"
};

var styles = {
    separator: merge(inlineMixin, {
        margin: "0 1em",
        fontSize: "1.25rem",
        fontFamily: "serif",
        fontStyle: "italic"
    }),

    output: merge(inlineMixin, {
        border: "1px solid #39f",
        padding: ".5em .75em",
        fontSize: "1.75em",
        fontWeight: "300",
        lineHeight: "1.75rem"
    })
};
