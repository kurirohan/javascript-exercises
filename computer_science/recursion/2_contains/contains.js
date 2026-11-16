const contains = function(obj, val) {
    if (obj == null || obj == undefined || Object.values(obj).length <= 0) return false;
    if (Object.values(obj).some(item => Object.is(item, val))) return true;

    let doesContain = false;

    for (const item of Object.values(obj)) {
        if (typeof item === 'object') {
            doesContain ||= contains(item, val);    
        }
    }

    return doesContain;
};
  
// Do not edit below this line
module.exports = contains;
