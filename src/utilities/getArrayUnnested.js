const newArr = [];

export const getArrayUnnested = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let currentObj = arr[i];
    let currentReplies = arr[i].replies;
    newArr.push(currentObj);
    if (Array.isArray(currentReplies) && currentReplies.length) {
      getArrayUnnested(currentReplies);
    }
  }
  return newArr;
};
