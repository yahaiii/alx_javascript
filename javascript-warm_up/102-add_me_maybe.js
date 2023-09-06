function addMeMaybe(nb, theFunction){
    const incrementedNb = nb + 1;
    theFunction(incrementedNb);
}

module.exports = {
    addMeMaybe,
}