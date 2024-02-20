export function extractPageData(data, currentPage = 1, dataPerPage = 10) {
    const indexOfLastPost = currentPage * dataPerPage;
    const indexOfFirstPost = indexOfLastPost - dataPerPage;
    return data && data?.slice(indexOfFirstPost, indexOfLastPost);
}