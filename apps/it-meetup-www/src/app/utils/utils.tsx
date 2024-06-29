export const filteredParamsIfNotNull = (params: unknown) => {
    if (!params) {
        return;
    }
    return Object.fromEntries(
        Object.entries(params).filter((value) => !!value)
    );
};