const ValidCar = (data) => {
  //  debugger;
  if (data?.length === 10 || data?.length === 9) {
    for (let i = 0; i < data.length; i++) {
      if (data?.length === 9) {
        if ((i === 2 || i === 6) && data[i] === "-") {
          return false;
        } else if ((i === 2 || i === 6) && data[i] === "-") {
          continue;
        } else if (+data[i]) {
          return true;
        } else {
          return false;
        }
      } else if (data?.length === 10) {
        if ((i === 3 || i === 6) && data[i] !== "-") {
          return false;
        } else if ((i === 3 || i === 6) && data[i] === "-") {
          continue;
        } else if (+data[i]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else if (data?.length <= 8 && data?.length >= 7 && +data) {
    return true;
  } else {
    return false;
  }
};
export default ValidCar;
