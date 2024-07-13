const localeId = "id-ID";

export const dateFormatter = (e) => {
  return new Date(e).toLocaleString(localeId, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",

    // hour: "2-digit",
    // minute: "2-digit",
  });
};

export const getMonthYear = (e) => {
  return new Date(e).toLocaleString(localeId, {
    month: "long",
    year: "numeric",
  });
};

export const getValueDay = (e) => {
  return new Date(e).toLocaleString(localeId, {
    day: "2-digit",
  });
};

export const getNameDay = (e) => {
  return new Date(e).toLocaleString(localeId, {
    weekday: "long",
  });
};

export const getDaysName = (dateString) => {
  const weekDates = [];
  for (let x of getWeekDates(dateString)) {
    weekDates.push({
      date: x,
      dayName: getNameDay(x),
      dayValue: getValueDay(x),
    });
  }
  return weekDates;
};

export const getWeekDates = (dateString) => {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  date.setDate(date.getDate() - dayOfWeek);
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(date);
    weekDates.push(
      day.toLocaleDateString(localeId, {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
    date.setDate(date.getDate() + 1);
  }
  return weekDates;
};
