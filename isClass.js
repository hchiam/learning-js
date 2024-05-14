/** or just instanceof */
function isClass(instance, classObject) {
    return instance.constructor.name === classObject.name;
}
