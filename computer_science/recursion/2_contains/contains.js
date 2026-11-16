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

/*
A couple of differences worth noticing:

- Your null guard handles a null or undefined input; the reference would throw on those. 
obj == null already catches both, so || obj == undefined is redundant.
- Object.is treats NaN as equal to itself, like the reference’s includes, 
but differs for 0 and -0 (Object.is says they’re different; includes says they’re equal).
- The reference filters out null before recursing; your guard handles it when recursion reaches it. 
Both work, though yours makes an extra function call for null.
*/
  
// Do not edit below this line
module.exports = contains;
