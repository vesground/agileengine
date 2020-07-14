export const parseCoursePropertiesKeysInSnake = ({
  id,
  courseId,
  coursePhoto,
  title,
  price,
  selectedPrice,
  interactionLevel,
  timeToCompletion,
  author: { firstName, lastName },
}) => ({
  title,
  price: (price || price == 0) ? price : selectedPrice,
  author: { first_name: firstName, last_name: lastName },
  course_id: id || courseId,
  course_photo: coursePhoto,
  interaction_level: interactionLevel || '',
  time_to_completion: timeToCompletion,
});

export const parseCoursePropertiesKeysInCamel = ({
  course_id,
  course_photo,
  title,
  price,
  interaction_level,
  time_to_completion,
  price_with_discount,
  author: { first_name, last_name },
}) => ({
  title,
  price,
  author: { firstName: first_name, lastName: last_name },
  courseId: course_id,
  coursePhoto: course_photo,
  interactionLevel: interaction_level,
  timeToCompletion: time_to_completion,
  priceWithDiscount: price_with_discount,
});

export const deduplicate = (arr, keyType) => {
  const temp = {};
  const arrWithUniqueItems = arr.filter(item => {
    const key = keyType ? item[keyType] : JSON.stringify(item);
    temp[key] = (temp[key] || 0) + 1;

    return temp[key] === 1;
  });

  return arrWithUniqueItems;
};
