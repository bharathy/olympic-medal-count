export const sortByDesc = (medals, sortBy) => {
    return medals.sort(function (x, y) {
        const result = comparator(x[sortBy], y[sortBy]);
        const fallbackSortBy = tieBreaker(sortBy);

        return result === 0 ? comparator(x[fallbackSortBy], y[fallbackSortBy]) : result;
    });
};

export const tieBreaker = (sortBy) => (sortBy === 'gold') ? 'silver' : 'gold';

export const comparator = (a, b) => {
    return (a > b) ? -1
        : (a < b ? 1 : 0);
};

export const withTotal = (medals) => {
    return medals.map((medal, i) => {
        const medalList = [ medal.gold, medal.silver, medal.bronze ];
        const total = medalList.reduce(( acc, curr ) => acc + curr, 0);

        return {...medal, total };
    });
};