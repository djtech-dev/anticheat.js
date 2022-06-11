const SAFE_MEMORY_COPY = _.cloneDeep(window);
      
function isTampered(obj) {
  return (window[obj] == SAFE_MEMORY_COPY[obj])
}
