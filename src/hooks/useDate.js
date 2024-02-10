const getDate = () => {
    const getYear = new Date().getFullYear();
    return getYear === 2023 ? getYear : '2023 - ' + getYear;
};

export default getDate;