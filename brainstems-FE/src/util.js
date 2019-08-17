const filterByGrade = (array, Activities) => {
 
  if (array.length > 0) {
    let filteredActivities = Activities.filter(activity => {
      
      if (array.includes(activity.grade)) {
        return activity;
      } else {
        return "";
      }
    });
    return filteredActivities.length > 0 ? filteredActivities: ["empty", "empty"];
  } else {
    return Activities;
  }
};

const filterByTopic = (filterArray, Activities) => {
  if (filterArray.length > 0) {
    let filteredActivities = Activities.filter(activity => {
  
      let i = 0;
      do {
      
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
    return filteredActivities.length > 0 ? filteredActivities: ["empty", "empty"];
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
