function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    function anotherFunction() {}
    return anotherFunction;
}

function returnsAnAnonymousFunction() {
    return () => "Hello, world!"
}