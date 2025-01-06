const formatDate = (inputDate) => {
  if (inputDate) {
    const date = new Date(inputDate);
    return new Intl.DateTimeFormat('id-ID').format(date);
  }
};

export { formatDate };
