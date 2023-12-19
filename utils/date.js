const formatDate = function (date) {
  const options = { weekday: "short", day: "2-digit", month: "short" };
  return new Date(date).toLocaleDateString("en-US", options);
};

const getYesterday = function () {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return formatDate(yesterday);
};

const getTwoDaysAgo = function () {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 2);
  return formatDate(yesterday);
};

const getThreeDaysAgo = function () {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 3);
  return formatDate(yesterday);
};

const getTomorrow = function () {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() + 1);
  return formatDate(yesterday);
};

const getTwoDaysToday = function () {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() + 2);
  return formatDate(yesterday);
};

const getThreeDaysToday = function () {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() + 3);
  return formatDate(yesterday);
};

module.exports = {
  formatDate,
  getYesterday,
  getTwoDaysAgo,
  getThreeDaysAgo,
  getTomorrow,
  getTwoDaysToday,
  getThreeDaysToday,
};
