export function extractPageData(data, currentPage = 1, dataPerPage = 10) {
    console.log(data)
    const indexOfLastPost = currentPage * dataPerPage;
    const indexOfFirstPost = indexOfLastPost - dataPerPage;
    return data && data?.slice(indexOfFirstPost, indexOfLastPost);
}