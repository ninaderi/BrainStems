const filterByGrade = (array, Activities) => {
  console.log("array lebgth ", array.length);
  if (array.length > 0) {
    let filteredActivities = Activities.filter(activity => {
      console.log("array is ", array, "and activity grade is ", activity.grade);
      if (array.includes(activity.grade)) {
        return activity;
      } else {
        return "";
      }
    });
    return filteredActivities;
  } else {
    return Activities;
  }
};

const filterByTopic = (filterArray, Activities) => {
  if (filterArray.length > 0) {
    let filteredActivities = Activities.filter(activity => {
      console.log(
        "filterArray is ",
        filterArray,
        "and activity topic is ",
        activity.topic
      );
      let i = 0;
      do {
        console.log("activity topic iter is ", activity.topic[i]);
        if (filterArray.includes(activity.topic[i])) {
          console.log("topic matches");
          break;
        } else {
          console.log("no matches");
          return "";
        }
        i += 1;
      } while (activity.topic[i]);
      return activity;
    });
    return filteredActivities;
  } else {
    return Activities;
  }
};

const filterByType = (array, Activities) => {
  if (array.length > 0) {
    let filteredActivities = Activities.filter(activity => {
      if (array.includes(activity.type)) {
        return activity;
      } else {
        return "";
      }
    });
    return filteredActivities;
  } else {
    return Activities;
  }
};

const filterBySearch = (arg, Activities) => {
  let filterBySearchArray = Activities.filter(activity => {
    return activity.name.toLowerCase().includes(arg.toLowerCase());
  });
  return filterBySearchArray;
};

export { filterBySearch, filterByGrade, filterByTopic, filterByType };
